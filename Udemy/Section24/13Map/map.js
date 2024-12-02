//map
var products = [
  { id: 1, productName: 'TV', price: 5000 },
  { id: 2, productName: 'Monitor', price: 1200 },
  { id: 3, productName: 'iPad', price: 2000 },
  { id: 4, productName: 'Phone', price: 1800 }
];

var updatedProducts = products.map( (p) => {
  p.price += p.price * 10 / 100;
  p.productName = p.productName.toUpperCase();
  return p;
} );

console.log(updatedProducts);
