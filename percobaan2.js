const http = require('http')

http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    if (request.url == '/') {
        response.write(
            `<h1>Halaman Utama</h1><hr>
            <p>lorem ipsum lorem ipsum</p><br>
            <button>simpan</button>`
        )
    }
    else if (request.url == '/about'){
        response.write(
            `<h1>Halaman Profil Kami</h1><hr>
            <p>PT Bangun Abadi adalah perusahaan yg bergerak di bidang IT</p><br>
            <button>simpan</button>`
        )
    }
    else {
        response.write('<h1>Url Tidak tersedia, bosque !!</h1>')
    }
}).listen(3000, function(){
    console.log('server sudah siap, silakan akses http://localhost:3000');
})