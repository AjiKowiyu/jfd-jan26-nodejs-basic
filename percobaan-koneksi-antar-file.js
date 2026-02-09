const http = require('http')

let owner = 'Kim Jong Un'

// 1. harus panggil dulu filenya
// 2. pastikan file yg dipanggil, variabelnya sudah di export
let profil_kry = require('./data_karyawan/profil')

const server = http.createServer( function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    if (req.url == '/') {
        res.write('Halaman utama '+ profil_kry.nama + ', tinggal di ' + profil_kry.tempatTinggal + '<br>')
        res.write(profil_kry.cetakProfil('Programmer'))
    }
    else if (req.url == '/about'){
        res.write('Tentang kami')
    }
    else {
        res.write('<h1>Url Tidak tersedia, bosque !!</h1>')
    }
    res.end()
})

server.listen(3000, function(){
    console.log('server sudah siap, silakan akses http://localhost:3000');
})