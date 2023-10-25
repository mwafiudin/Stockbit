from flask import Flask, render_template, request, jsonify, make_response
from flask_jwt_extended import create_access_token, jwt_required, JWTManager, get_jwt_identity, unset_jwt_cookies
from flask_cors import CORS
import pymysql.cursors
import logging
import json

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'haris_ganteng'
jwt = JWTManager(app)
CORS(app)  # Tambahkan ini untuk mengizinkan CORS di seluruh aplikasi

# Konfigurasi logging
logging.basicConfig(level=logging.INFO)

# Konfigurasi koneksi database
db_config = {
    'host': 'localhost',  # Ganti dengan host database Anda
    'port': 3306,         # Ganti dengan port MySQL Anda
    'user': 'root',       # Ganti dengan username database Anda
    'password': '',  # Ganti dengan password database Anda
    'db': 'robot_stockbit'  # Ganti dengan nama database Anda
}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    emailUser = str(data.get('emailUser'))
    passwordUser = str(data.get('passwordUser'))

    connection = pymysql.connect(**db_config)

    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            # Eksekusi pernyataan SQL SELECT
            sql = "SELECT * FROM tbl_user WHERE emailUser = %s"
            cursor.execute(sql, (emailUser,))
            user = cursor.fetchone()  # Mengambil data pengguna dengan emailUser yang sesuai

            if user and passwordUser == user['passwordUser']:
                # Mengambil ID pengguna dari hasil query
                user_id = user['idUser']

                # Membuat access token
                access_token = create_access_token(identity=user_id)
                return {'access_token': access_token}, 200
            else:
                return {'message': 'Invalid credentials'}, 401
    finally:
        connection.close()

@app.route('/logout', methods=['GET'])
@jwt_required()  # Harus login (menggunakan token) untuk melakukan logout
def logout():
    user_id = get_jwt_identity()
    
    # Di sini Anda dapat melakukan operasi tambahan yang diperlukan saat logout, jika ada

    # Membatalkan token
    response = make_response(jsonify({'message': 'Logout berhasil'}), 200)
    unset_jwt_cookies(response)
    return response

@app.route('/data_automation', methods=['GET'])
@jwt_required()
def data_automation():
    user_id = get_jwt_identity()
    [username, password, idAccSecurity, sec_name] = get_username_password(user_id)
    # Membuka koneksi ke database
    connection = pymysql.connect(**db_config)
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            # Eksekusi pernyataan SQL SELECT
            sql = "SELECT * "
            sql = sql + "FROM tbl_automation "
            sql = sql + "INNER JOIN tbl_tradeMethod ON tbl_automation.idTradeMethod = tbl_tradeMethod.idTradeMethod "
            sql = sql + "WHERE idAccSecurity = %s"
            cursor.execute(sql,(idAccSecurity,))
            result = cursor.fetchone()
            
            # Ambil deskripsi (metadata) kolom-kolom dari hasil query
            columns = [column[0] for column in cursor.description]

            # Buat kamus dengan semua atribut
            output_data = {}
            for column in columns:
                if column == 'startDate' or column == 'endDate':
                    result[column] = result[column].strftime('%Y-%m-%d')
                elif column == 'startBuy' or column == 'startSell':
                    continue
                output_data[column] = result[column]

            return output_data
    finally:
        connection.close()

@app.route('/data_dashboard', methods=['GET'])
@jwt_required()
def data_dashboard():
    user_id = get_jwt_identity()
    # return {'user_id',user_id}
    name_user = get_name_user(user_id)
    [username, password, idAccSecurity, sec_name] = get_username_password(user_id)
    return {
        'name_user': name_user,
        'username':username,
        'password': password,
        'sec_name': sec_name
    }

def get_username_password(user_id):
    # Membuka koneksi ke database
    connection = pymysql.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            # Eksekusi pernyataan SQL SELECT
            sql = "SELECT tbl_accSecurity.accSecUsername, tbl_accSecurity.accSecPassword, tbl_accSecurity.idAccSecurity, tbl_security.secName "
            sql = sql + "FROM tbl_accSecurity "
            sql = sql + "INNER JOIN tbl_security ON tbl_accSecurity.idSecurity=tbl_security.idSecurity "
            sql = sql + "WHERE tbl_accSecurity.idUser = %s"
            cursor.execute(sql,(user_id,))
            result = cursor.fetchone()
            username = result[0]
            password = result[1]
            idAccSecurity = result[2]
            sec_name = result[3]
            return [username,password,idAccSecurity,sec_name]
    finally:
        connection.close()

def get_name_user(user_id):
    # Membuka koneksi ke database
    connection = pymysql.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            # Eksekusi pernyataan SQL SELECT
            sql = "SELECT nameUser FROM tbl_user WHERE idUser = %s"  # Ganti dengan nama tabel dan atribut Anda
            cursor.execute(sql,(user_id,))
            result = cursor.fetchone()
            name_user = result[0]
            return name_user
    finally:
        connection.close()

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected_route():
    current_user_id = get_jwt_identity()  # Mendapatkan ID pengguna dari token JWT
    # Gunakan ID pengguna ini untuk mengakses atau memproses informasi sesi.
    return {'message': f'User {current_user_id} is accessing the protected route'}

@app.route('/')
def get_data():
    # Membuka koneksi ke database
    connection = pymysql.connect(**db_config)

    try:
        with connection.cursor() as cursor:
            # Eksekusi pernyataan SQL SELECT
            sql = "SELECT status_robot FROM robot_status"  # Ganti dengan nama tabel dan atribut Anda
            cursor.execute(sql)
            result = cursor.fetchall()

            # Ambil data dari elemen tuple pertama (indeks 0) dari hasil query
            names = [row[0] for row in result]

            # return names
            return render_template('index.html', names=names)
    finally:
        connection.close()

@app.route('/get_user')
def get_user():
    # Membuka koneksi ke database
    connection = pymysql.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            # Eksekusi pernyataan SQL SELECT dengan JOIN antara user dan robot_status
            sql = """
                SELECT u.id, u.username, u.password, u.status_robot_id, r.status_robot
                FROM user u
                LEFT JOIN robot_status r ON u.status_robot_id = r.id
                WHERE r.status_robot = 'Belum Diproses'
            """
            cursor.execute(sql)
            result = cursor.fetchall()
            
            # # Mengonversi hasil query ke format JSON yang sesuai dengan atribut tabel SQL
            # columns = [column[0] for column in cursor.description]
            # data = [dict(zip(columns, row)) for row in result]

            # return jsonify(data)

            if result:
                columns = [column[0] for column in cursor.description]
                data = dict(zip(columns, result[0]))
            else:
                data = {}  # Objek kosong jika tidak ada hasil
            return jsonify(data)
    finally:
        connection.close()

from flask import request

@app.route('/update_status_dikerjakan', methods=['GET'])
def update_status_dikerjakan():
    # Mendapatkan id_user dari parameter URL
    id_user = request.args.get('id_user', type=int)

    # Buka koneksi ke database
    connection = pymysql.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            # Eksekusi pernyataan SQL untuk mengambil ID pertama yang memiliki status_robot 'Proses Dikerjakan'
            sql = "SELECT id FROM robot_status WHERE status_robot = 'Proses Dikerjakan' LIMIT 1"
            cursor.execute(sql)
            result = cursor.fetchone()  # Mengambil baris pertama

            if result:
                status_id = result[0]  # Menggunakan indeks 0 untuk mengambil ID

                # Perbarui status_robot_id dalam tabel user
                update_sql = """
                    UPDATE user
                    SET status_robot_id = %s
                    WHERE id = %s
                """
                cursor.execute(update_sql, (status_id, id_user))
                connection.commit()  # Simpan perubahan ke database

                return jsonify({"message": f"Status robot untuk pengguna dengan ID {id_user} telah diperbarui menjadi 'Proses Dikerjakan'"})
            else:
                return jsonify({'message': 'Tidak ada data dengan status_robot "Proses Dikerjakan"'})
    finally:
        connection.close()


if __name__ == '__main__':
    app.run()
