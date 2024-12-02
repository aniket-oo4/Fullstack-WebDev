//slice
var products = [
  { id: 1, productName: 'TV', price: 5000 },
  { id: 2, productName: 'Monitor', price: 1200 },
  { id: 3, productName: 'iPad', price: 2000 },
  { id: 4, productName: 'Keyboard', price: 150 },
  { id: 5, productName: 'Bluetooth Headphones', price: 250 },
  { id: 6, productName: 'Clock', price: 75 },
  { id: 7, productName: 'Laptop', price: 1700 },
  { id: 8, productName: 'Washing Machine', price: 8840 },
];

var slicedProducts = products.slice(2, 5);
console.log(slicedProducts); //2, 3, 4 indexes
