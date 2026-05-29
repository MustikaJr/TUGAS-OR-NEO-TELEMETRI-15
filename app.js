const readline = require("readline");

// 1. Membuat interface untuk input/output terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Array penyimpanan data buku sementara
let daftarBuku = [];

// 3. Fungsi menambah buku
function tambahBuku(judul) {
    const buku = {
        id: daftarBuku.length + 1,
        judul: judul
    };
    daftarBuku.push(buku);
    console.log(`Buku "${judul}" berhasil ditambahkan.`);
}

// 4. Fungsi menampilkan semua buku
function tampilkanBuku() {
    console.log("\n===== DAFTAR BUKU =====");
    if (daftarBuku.length === 0) {
        console.log("Belum ada buku.");
    } else {
        daftarBuku.forEach((buku) => {
            console.log(`${buku.id}. ${buku.judul}`);
        });
    }
    console.log("=======================\n");
}

// 5. Fungsi simulasi mengambil data buku (async)
function ambilDataBuku() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data awal berhasil dimuat dari server.");
        }, 1500);
    });
}

// 6. Fungsi utama dengan input dari terminal
async function main() {
    console.log("===== APLIKASI MANAJEMEN BUKU =====");

    // Simulasi memuat data awal (async)
    const pesan = await ambilDataBuku();
    console.log(pesan);

    // Meminta input judul buku dari user
    rl.question("Masukkan judul buku: ", (judul) => {
        tambahBuku(judul);     // Menambah buku yang Anda ketik
        tampilkanBuku();       // Menampilkan list buku terbaru
        rl.close();            // Menutup interface terminal setelah selesai
    });
}

// Menjalankan aplikasi utama
main();