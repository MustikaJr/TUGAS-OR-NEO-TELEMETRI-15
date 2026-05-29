let stok = 0;

if (stok > 10) {
    console.log("Stok aman");
} else if (stok > 0) {
    console.log("Stok menipis"); 
} else {
    console.log("Stok habis");
}

let status = (stok > 0) ? "Tersedia" : "Habis";
console.log(status); 