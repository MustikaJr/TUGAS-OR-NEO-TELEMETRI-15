// 1. Membuat Fungsi yang Mengembalikan Objek Promise (Janji)
function ambilDataBuku() {
    return new Promise((resolve, reject) => {
        // Simulasi loading mengambil data selama 1.5 detik (1500 milidetik)
        setTimeout(() => {
            const berhasil = true; // Ubah ke false jika ingin simulasi gagal

            if (berhasil) {
                // Jika sukses, panggil fungsi resolve dan kirim datanya
                resolve({ judul: "Laskar Pelangi", penulis: "Andrea Hirata" });
            } else {
                // Jika gagal, panggil fungsi reject dan kirim pesan error
                reject("Gagal mengambil data buku");
            }
        }, 1500);
    });
}

// 2. Cara Menggunakan / Menagih Janji Tersebut
ambilDataBuku()
    .then((buku) => {
        // .then() otomatis berjalan jika statusnya 'resolve' (berhasil)
        console.log("Data buku:", buku);
    })
    .catch((error) => {
        // .catch() otomatis berjalan jika statusnya 'reject' (gagal)
        console.error("Error:", error);
    });