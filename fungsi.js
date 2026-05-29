
function tampilkanBuku(judul, penulis) {
    return `${judul} oleh ${penulis}`;
}
console.log(tampilkanBuku("Laskar Pelangi", "Andrea Hirata"));

const hitungTotal = (harga, jumlah) => harga * jumlah;
console.log(hitungTotal(75000, 3)); 

function infoBuku(judul = "Tidak diketahui") {
    return `Buku: ${judul}`;
}

console.log(infoBuku());                  
console.log(infoBuku("Sang Pemimpi"));    