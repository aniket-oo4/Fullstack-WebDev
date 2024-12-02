// [].some(function(element){ return condition});// return true or false
// Retruen true if atleast one element matches with the given conditionn;
// it returns false only if all elements does not match condition 

let arr=[120,100,3,5];
console.log(arr.some(function(element){
 return element>100;
}));//true

 arr=[10,100,3,5];
 console.log(arr.some(function(element){
    return element>100;
   })); //false
   