// [].flatMap(function(element) { return value;});
// Similar to 'map' function .
//  'map ' is one-to-one . You should return single value .
//  'flatMap' is one-to-many . You can return an array ;
// using flatmap we can return multiple element at atime for eg array of multiple ele
var products = [
    { id: 1, productName: 'TV', price: 5000 },
    { id: 2, productName: 'Monitor', price: 1200 },
    { id: 3, productName: 'iPad', price: 2000 },
    { id: 4, productName: 'Phone', price: 1800 }
];

// let updatedProducts=products.flatMap( (product)=>{
//     return product;
// })
// console.log(updatedProducts);
let updatedProducts=products.flatMap( (product)=>{
    if(product.productName=="Monitor"||product.productName=="iPad")
    {
        var  product2={...product,price:product.price+1000};
        return [product,product2];
    }
    else
        return [product];

})
console.log('updated :',updatedProducts);