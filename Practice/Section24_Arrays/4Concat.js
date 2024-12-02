// [].concat(arr,arr2,...arrN); 
// this methods concats the passed  arrays to the actucal array and returns new array not overwrites existing
// this method  does not modifies existing array it returns new array
let arr=[1,2,3,4];

console.log("before concating current :",arr);
let newArr=arr.concat([33,44,55],[909,901]);
console.log("after concating current :",arr);

console.log("new Arr  where stored concated array  :",newArr);


