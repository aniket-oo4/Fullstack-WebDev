// both push and pop methods modifies existing arrays 

// arr.push(ele) add the element to the  end  of existing array overrites exisiting and returns new length of array

var prices=[700,70,54,77];
console.log (prices.push(5099)); // return new length of array 
console.log("after Push :");
console.log(prices);

// arr.pop() // methods remove last element of array and  return it back 
console.log("Popped :",prices.pop());// return deleted ele
console.log("after Popping:",prices )


var products=[
    {producName:"tv",price:900},
    {producName:"mac",price:9200},
    {producName:"windows",price:9900}    
]
console.log("before Pushing",products)

products.push({producName:"mibile",price:900});
console.log("After pushing :",products);


console.log("Popped :",products.pop());
console.log("After popping :",products);