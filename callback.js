function prosesData(judul, callback) {
 console.log(`Memproses buku "${judul}"...`);
 const hasil = judul.toUpperCase();
 callback(hasil);
}
prosesData("Laskar Pelangi", function(hasil) {
 console.log("Hasil:", hasil); 
});

console.log("Mulai mengambil data...");
setTimeout(function() {
 console.log("Data buku berhasil dimuat setelah 2 detik");
}, 2000);
console.log("Baris ini dieksekusi lebih dulu!");