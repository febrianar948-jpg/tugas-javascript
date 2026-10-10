// Case 1
let data = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

let nama = data.trim().split(",");

nama = nama.map(function (item) {
    return item.trim().toLowerCase();
});

let hasil = nama.join(" | ");

console.log(hasil);


// Case 2
const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

let produkAktif = products.filter(function (product) {
    return product.active === true;
});

let namaProduk = produkAktif.map(function (product) {
    return product.name.toUpperCase();
});

let totalHarga = produkAktif.reduce(function (total, product) {
    return total + product.price;
}, 0);

console.log(produkAktif);
console.log(namaProduk);
console.log(totalHarga);