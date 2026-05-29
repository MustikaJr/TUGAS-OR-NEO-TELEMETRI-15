// 1. Fungsi biasa yang menghasilkan Promise
function ambilDataBuku() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer" });
        }, 1500); // Menunggu 1.5 detik
    });
}

// 2. Membuat Fungsi Async untuk mengeksekusi Promise dengan rapi
async function tampilkanBuku() {
    console.log("Mengambil data buku...");
    
    // 'await' memerintahkan program berhenti di sini sampai fungsi ambilDataBuku() selesai
    const buku = await ambilDataBuku();
    
    // Baris di bawah ini baru akan berjalan setelah data buku berhasil diambil
    console.log("Data buku:", buku);
}

// 3. Menjalankan fungsi utama
tampilkanBuku();