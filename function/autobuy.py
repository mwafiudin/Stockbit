def show_list_buy(data_order, total_balance, max_percent):
    # Inisialisasi list kosong untuk menyimpan data yang akan diubah
    data_baru = []
    used_balance = total_balance/100
    used_balance = used_balance * max_percent
    count_buy = 0
    total = 0

    # Loop melalui data awal
    for item in data_order:
        # Evaluasi string sebagai list
        item_list = eval(item)

        # Ambil elemen-elemen yang diperlukan dan buat sublist baru
        sublist = [item_list[0], int(item_list[2])]

        # Tambahkan sublist ke data_baru
        data_baru.append(sublist)
    for i in range(99999):
        total = 0
        for data_loop in data_baru:
            total = total + i * data_loop[1]
        if total > used_balance:
            count_buy = i - 1
            break

    # data baru hasil filtering ini menghasilkan data [['CUAN','3020'],['ADHI','505'],['KIJA','169']]
    return count_buy