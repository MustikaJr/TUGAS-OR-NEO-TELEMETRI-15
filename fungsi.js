// 1. Function Declaration (Cara standar membuat fungsi)
function tampilkanBuku(judul, penulis) {
    return `${judul} oleh ${penulis}`;
}
console.log(tampilkanBuku("Laskar Pelangi", "Andrea Hirata"));


// 2. Arrow Function (Cara singkat/modern menulis fungsi)
const hitungTotal = (harga, jumlah) => harga * jumlah;
console.log(hitungTotal(75000, 3)); // Output: 225000


// 3. Default Parameter (Menyiapkan nilai cadangan jika data kosong)
function infoBuku(judul = "Tidak diketahui") {
    return `Buku: ${judul}`;
}

// Menguji fungsi default parameter
console.log(infoBuku());                  // Output: Buku: Tidak diketahui
console.log(infoBuku("Sang Pemimpi"));    // Output: Buku: Sang Pemimpi