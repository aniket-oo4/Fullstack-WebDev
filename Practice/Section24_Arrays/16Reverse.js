[].reverse();
// Reverses the entire array  and overwrites the exisiting array with reversed array

var products = [
    { id: 1, productName: 'TV', price: 5000 },
    { id: 2, productName: 'Monitor', price: 1200 },
    { id: 3, productName: 'iPad', price: 2000 },
    { id: 4, productName: 'Phone', price: 1800 }
];
// console.log(products);
console.log("before Reversing :\n",products);

products.reverse();
console.log("fter Reversing ::\n",products);