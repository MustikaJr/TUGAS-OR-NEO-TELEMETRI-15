const args = process.argv.slice(2);

if (args.length === 0) {
    // Jika tidak ada argumen yang diberikan
    console.log("Halo! Anda lupa memberikan nama.");
    console.log("Coba jalankan: node index.js <namaAnda>");
} else {
    // Mengambil argumen pertama sebagai nama pengguna
    const userName = args[0];
    console.log(`Halo, ${userName}! Selamat datang di CLI sederhana saya.`);
}

console.log("\n---"); // Pembatas visual
console.log("Ini adalah contoh aplikasi CLI berbasis Node.js.");
