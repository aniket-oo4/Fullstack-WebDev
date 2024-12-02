//flatMap
var products = [
  { id: 1, productName: 'TV', price: 5000 },
  { id: 2, productName: 'Monitor', price: 1200 },
  { id: 3, productName: 'iPad', price: 2000 },
  { id: 4, productName: 'Phone', price: 1800 }
];

//flatMap executes the callback once for each element; but each element can produce one or more elements.
let updatedProducts = products.flatMap((p) => {
  if (p.productName == "Monitor" || p.productName == "iPad")
  {
    var p2 = { ...p, price: p.price + (p.price * 10 / 100) };
    return [ p, p2 ];
  }
  else
  {
    return [ p ];
  }
});
console.log(updatedProducts);
