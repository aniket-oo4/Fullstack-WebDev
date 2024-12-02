// [].forEach(function(element){ any code });
// Executes the callback function once for each element of the array .
// Alt+click for multiple cursor

let products=[
    
    {id:4,productName:"mac",price:3,quantity:0,increaseQuantity},
    {id:2,productName:"samsung",price:2,quantity:0,increaseQuantity},
    {id:1,productName:"apple",price:1030,quantity:0,increaseQuantity},
    {id:3,productName:"xiaomi",price:100,quantity:0,increaseQuantity},
    {id:5,productName:"Apple",price:1300,quantity:0,increaseQuantity},  
]

function increaseQuantity(){
    this.quantity++;
}

// // By using for loop 
// for(let i=0;i<products.length;i++){
//     products[i].increaseQuantity();
// }
// console.log(products);

/// using forEach method we dont have foreach loop in js but ave method

products.forEach((product)=>{
    if(product.price<1000)
    {
        product.increaseQuantity();
    }
  
});
console.log(products);