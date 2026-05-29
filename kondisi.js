let stok = 5;

// Menggunakan if-else if-else
if (stok > 10) {
    console.log("Stok aman");
} else if (stok > 0) {
    console.log("Stok menipis"); // Karena stok = 5, baris ini yang akan jalan
} else {
    console.log("Stok habis");
}

// Ternary operator (Cara cepat menulis if-else dalam satu baris)
let status = (stok > 0) ? "Tersedia" : "Habis";
console.log(status); // Output: Tersedia