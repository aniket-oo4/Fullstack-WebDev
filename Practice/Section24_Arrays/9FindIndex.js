// [].findIndex(function(element){ return condition});// returns Index Of  first Matching element that matches  condition; if not returns -1
// Returns Index of the First matching elemetn ,that are maching with the given condition 
// if not found any matching then returns  -1

let arr=[120,100,3,5,7,9,44];
let ans=arr.findIndex((element)=>{return element<0});
console.log(ans); // returns -1 ;

 ans=arr.findIndex((element)=>{return element<100});
 console.log(ans); // returns  2 Index of first matching ele ;

// // using with array of object s

let products=[
    
    {id:4,productName:"mac",price:3},
    {id:2,productName:"samsung",price:2},
    {id:1,productName:"apple",price:1030},
    {id:3,productName:"xiaomi",price:100},
    {id:5,productName:"Apple",price:1300},    
    
]

var index=products.findIndex((product)=>{ return product.price>=1000});// it will return Index of  first matching ele
console.log(`Expensive product  :`+products[index].productName);