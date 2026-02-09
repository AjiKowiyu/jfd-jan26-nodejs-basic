const http  = require('http')
const fs    = require('fs')

http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    if (request.url == '/') {
        fs.createReadStream('view/utama.html').pipe(response)
    }
    else if (request.url == '/about'){
        fs.createReadStream('view/about.html').pipe(response)
    }
    else {
        response.write('<h1>Url Tidak tersedia, bosque !!</h1>')
    }
}).listen(3000, function(){
    console.log('server sudah siap, silakan akses http://localhost:3000');
})