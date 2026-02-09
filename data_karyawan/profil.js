let nama = 'Yusup Saputra'
let alamat = 'Kembangan, Jakarta Barat'

function biodata(profesi) {
    return `Nama: ${nama}\n Alamat: ${alamat} \n Pekerjaan: ${profesi}`
}

module.exports = {
    nama,
    tempatTinggal: alamat,
    cetakProfil: biodata
}