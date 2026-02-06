const http = require('http')
// menggunakan modul http yg sudah disiapkan oleh node.js
// modul http berfungsi untuk
// membuat komputer kita bisa diakses dari luar
// (dengan menggunakan internet)
// localhost adalah replika (dummy) dari situs web asli tapi hanya jalan di komputer kita
// untuk keperluan pengembangan/pembuatan aplikasi

let server = http.createServer( function(request, response){
    // console.log('tes nyalain server')
    let namaPresiden = 'Jokowi'
    let gajiPresiden = 1000
    response.writeHead(200, {'Content-Type':'text/html'})
    response.end(`Hello world ${namaPresiden} <hr><button>klik me</button>`)
})

server.listen(3000, function(){
    console.log('server sudah siap, silakan akses http://localhost:3000');
})


// nyalain server: node namafile
// matiin server: ctrl + c
// tes aja buat github