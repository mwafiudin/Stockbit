from flask import Flask, render_template, request, jsonify
import pymysql.cursors
import logging


app = Flask(__name__)

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
