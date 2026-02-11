// require punya 3 fungsi
// 1. memanggil modul/fitur bawaan node.js
// 2. memanggil modul/fitur dari npmjs
// 3. memanggil file lain

// panggil modul mysql2 dari node_modules
const mysql = require('mysql2')

// cara menghubungkan dengan database mysql
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kelas_jfd'
})

database.connect()

try {
    let sql = 
        `SELECT
            karyawan.*,
            agama.nama as agama_nama,
            jabatan.nama as jabatan_nama
        FROM karyawan
        LEFT JOIN agama ON agama.id = karyawan.agama_id
        LEFT JOIN jabatan ON jabatan.id = karyawan.jabatan_id
        `
    ;

    database.query(sql, function(error, hasil) {
        if (error) {
            throw error.message()
        }

        let semuaNama = ''
        for (const i in hasil) {
            semuaNama += hasil[i].nama + '\n'
        }

        console.log(hasil);
        console.log('=============');
        console.log(semuaNama);

    })
    database.end()
} catch (error) {
    console.log(error);
}