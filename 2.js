function hitungVoucher(voucer,total) { //Hitung voucer memiliki parameter voucer dan total dimana memiliki variable 
    var diskon = 0 //diskon
    var bayar; // bayar
    var kembalian = 0 // dan kembalian 
    //menggunakan perulangan 
    if (voucer == "DumbWaysJos") {
        if (total >= 50000){
            diskon = total * 21.1 / 100
        if (diskon <= 20000){
            bayar= total - diskon
        }
        if (diskon > 20000) {
            diskon = 0,
            bayar = total
        }
        } else {
            bayar=total
        }
    } else if (voucer == "DumbWaysMantap") {
        if (total >= 80000){
            diskon = 30/100 * total
        if (diskon <= 40000){
            bayar= total - diskon
        }
        if (diskon > 40000) {
            diskon  = 0,
            bayar = total
        }
        } else {
            bayar = total
        }
    } kembalian = total - bayar 
    return 'bayar = Rp.' + bayar + '\n' +' diskon = Rp.' + diskon + '\n' + 'kembalian = Rp.' + kembalian //'/n' line karakter enter kebawah
}
console.log(hitungVoucher('DumbWaysJos', 100000));

// Masih eror