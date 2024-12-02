//indexOf and lastIndexOf
let firstProduct = { productName: "TV", price: 1600 };
let secondProduct = { productName: "Gaming Console", price: 445 };
let thirdProduct = { productName: "Head phones", price: 88 };
let fourthProduct = { productName: "Laptop", price: 801 };
let fifthProduct = { productName: "Oven", price: 445 };

let products = [ firstProduct, secondProduct, thirdProduct, fourthProduct, secondProduct, thirdProduct, firstProduct, thirdProduct ];

console.log(products.indexOf(fourthProduct)); //found at 3
console.log(products.indexOf(fifthProduct)); //found at -1
console.log(products.indexOf(thirdProduct)); //found at 2
console.log(products.lastIndexOf(thirdProduct)); //found at 7
console.log(products.indexOf(thirdProduct, 3)); //found at 5

var n = products.indexOf(fourthProduct);
if (n >= 0)
{
  console.log(`Laptop product found at ${n}`);
}
else
{
  console.log("Laptop product not found");
}
