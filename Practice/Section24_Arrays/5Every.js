// [].every(function (element){ return condition});  // true / false 
// parameter is callback method which specifies condition
// Returns true ,if all elements are matching with the given condition .
// if  one of the element not matches then it returns false 
// ex 
 
let arr=new Array(4);// constructor to define array  with all undefined values 
// console.log(arr.at(3)+" Length=",arr.length);
// arr.push(12,3,4,5,6);//it does not initializethe exisiting spot it adds new first 4 remains undefined 
// console.log(arr);
// arr=[120,100,433,5];
arr=[120,101,433,105];//it overwrites predefined spots 
console.log(arr);
let ans=arr.every(function (element){ //bool
    return element >100;
});
console.log(ans);

