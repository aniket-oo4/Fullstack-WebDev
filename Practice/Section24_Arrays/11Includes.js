// [].includes(value); // true/false
// Returns true if the given value found at least once in the array .
var iphone={id:7,productName:"Apple",price:1300,quantity:0}; 

let products=[
    
    {id:4,productName:"mac",price:3,quantity:0},
    {id:2,productName:"samsung",price:2,quantity:0},
    {id:1,productName:"apple",price:1030,quantity:0},
    {id:3,productName:"xiaomi",price:100,quantity:0},
    iphone    
]

var ans=products.includes({id:1,productName:"apple",price:1030,quantity:0});
console.log(ans);// it returns false because passed object is new object for compiler hence they are different
// everytime we write braces and properties then compiler creates new object ;
//solution
 ans=products.includes(iphone);
console.log(ans);// it returns true because memory is same 