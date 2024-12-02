// [].filter(function(element){ return condition});// return Array of elements that matchch condition;
// it returns all the elements that are matching with the given condition 
// if not any element matches the condition it will returns an empty array []


let arr=[120,100,3,5,7,9,44];
let ans=arr.filter((element)=>{return element<0});
console.log(ans);// []

 ans=arr.filter((element)=>{return element%2==0});
console.log(ans); //[ 120, 100, 44 ]

// using with array of object s

let products=[
    {id:1,productName:"apple",price:1030},
    {id:4,productName:"mac",price:3},
    {id:2,productName:"samsung",price:2},
    {id:3,productName:"xiaomi",price:100},
    {id:5,productName:"Apple",price:1300},  // case sensitive does not include this  
    
]

 ans=products.filter((product)=>{
    return product.productName=="apple"
});
console.log(ans);


//sorting the array of object
console.log("before sorting:",products);
products.sort();
console.log("after sorting without comparer :",products);

products.sort(function(product1,product2){

    return product1.id-product2.id;
});

console.log("after sorting with comparer :",products);


