const mysql = require('mysql2')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kelas_jfd'
})

database.connect()

try {
    let sql = 
        `UPDATE karyawan SET
            nama = 'Prabogo',
            alamat = 'Menteng',
            jabatan_id = 1
        WHERE id = 24`
    ;

    database.query(sql, function(error, hasil) {
        if (error) {
            throw error.message()
        }

        console.log(hasil);
        if (hasil.affectedRows > 0) {
            console.log('berhasil edit karyawan');
        }
    })
    database.end()
} catch (error) {
    console.log(error);
}