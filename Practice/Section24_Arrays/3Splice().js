// Removes The specified no of elements ,starting from the startindex 
// [].splice(startIndex,count); // count= how many 
// it overwrites existing array 
let arr=[1,2,3,4,5];
console.log("before splicing :",arr);
// arr.splice(2,3);
// console.log("After removing :",arr);


// splice can also be used to insert new elements
// [].splice(startIndex ,count,element1,element2) 
// arr.splice(2,1,23,44,55);// third parameters can be elelments to be add 
//  console.log("After removing :",arr);

 //splice - as replace 
 arr.splice(2,1,77)// removed element at 2 and replaced with 77
 console.log("Replace :",arr);
