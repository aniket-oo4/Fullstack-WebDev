//array - push
var prices = [ 700, 40, 80, 25 ];
prices.push(500);
console.log("after push", prices);
console.log(prices.pop());
console.log("after pop", prices);

//array of objects
var products =
[
  { productName: "TV", price: 5000 },
  { productName: "Monitor", price: 1200 },
  { productName: "iPad", price: 2000 },
  { productName: "Phone", price: 1800 },
];
console.log("before push", products);
products.push( { productName: "Keyboard", price: 45 } );
console.log("after push", products);
console.log(products.pop());
console.log("after pop", products);
