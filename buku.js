let buku = {
    id: 1,
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    harga: 95000,
    detail: {
        tahun: 1980,
        halaman: 535
    }
};


console.log(buku.judul);         
console.log(buku["penulis"]);    
console.log(buku.detail.tahun);  
console.log(buku.detail.halaman);