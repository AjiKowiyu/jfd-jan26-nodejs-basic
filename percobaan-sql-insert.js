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
        `INSERT INTO karyawan
        VALUES (null, 'Aji', '1945-08-17', 'L', 'Pluit, Jakarta Utara', 1, 3);
        `
    ;

    database.query(sql, function(error, hasil) {
        if (error) {
            throw error.message()
        }

        console.log(hasil);
        if (hasil.affectedRows > 0) {
            console.log('berhasil menambahkan karyawan baru');
        }
    })
    database.end()
} catch (error) {
    console.log(error);
}