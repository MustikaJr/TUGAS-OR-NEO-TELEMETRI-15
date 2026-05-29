// 1. Membuat fungsi yang menerima callback
function prosesData(judul, callback) {
    console.log(`Memproses buku "${judul}"...`);
    const hasil = judul.toUpperCase(); // Mengubah teks jadi huruf kapital semua
    callback(hasil); // Menjalankan fungsi titipan (callback) dengan membawa variabel 'hasil'
}

// Memanggil fungsi prosesData dan menitipkan fungsi cetak di parameter kedua
prosesData("Laskar Pelangi", function(hasil) {
    console.log("Hasil:", hasil); // Output: Hasil: LASKAR PELANGI
});


// 2. Callback dalam operasi asynchronous (Tidak sinkron / menunggu waktu)
// setTimeout digunakan untuk menunda eksekusi kode
setTimeout(function() {
    console.log("Data buku berhasil dimuat setelah 2 detik");
}, 2000); // 2000 milidetik = 2 detik