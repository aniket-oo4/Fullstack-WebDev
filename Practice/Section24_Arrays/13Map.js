// [].map(function (element){ return value;})// creates array of return values  after performing operation
// return empty otherwise
// Executes the function once for each element in the array ;
// Creates a new array with the returned values 
// it similar to forEach but forEach do not return anything but it return new Array 
//map does not overwrites exisiting array
var products = [
    { id: 1, productName: 'TV', price: 5000 },
    { id: 2, productName: 'Monitor', price: 1200 },
    { id: 3, productName: 'iPad', price: 2000 },
    { id: 4, productName: 'Phone', price: 1800 }
];

var updatedProducts = products.map((product) => {
    product.discountedPrice=product.price-(product.price/100)*10;
  return product;
})

console.log(updatedProducts);
