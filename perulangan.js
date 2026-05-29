let daftarBuku = ["Laskar Pelangi", "Bumi Manusia", "Sang Pemimpi"];

console.log("--- Menggunakan For Loop ---");
for (let i = 0; i < daftarBuku.length; i++) {
    console.log(`${i + 1}. ${daftarBuku[i]}`);
}

console.log("\n--- Menggunakan For...of Loop ---");
for (let buku of daftarBuku) {
    console.log(buku);
}