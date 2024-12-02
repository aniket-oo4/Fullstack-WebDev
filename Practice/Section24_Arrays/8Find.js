// [].find(function(element){ return condition});// return first Matching of element that given condition; otherwise undefined
// Returns the  single firsts matching  element ,among the elements that are matching with the given condition 
// it Returns undefined if not any element matches the condition  
let arr=[120,100,3,5,7,9,44];
let ans=arr.find((element)=>{return element<0});
// console.log(ans); // returns undefined ;

// ans=arr.find((element)=>{return element<100});
// console.log(ans); // returns first matching ele ;

// // using with array of object s

let products=[
    
    {id:4,productName:"mac",price:3},
    {id:2,productName:"samsung",price:2},
    {id:1,productName:"apple",price:1030},
    {id:3,productName:"xiaomi",price:100},
    {id:5,productName:"Apple",price:1300},  
    
]
// var expensiveProducts=products.filter((product)=>{ return product.price>=1000});
// console.log(`Expensive products  :`+expensiveProducts);// it will returns array of products 

var expensiveProduct=products.find((product)=>{ return product.price>=1000});
console.log(`Expensive product  :`+expensiveProduct.productName);// it will return first matching ele but not  most expensive 


