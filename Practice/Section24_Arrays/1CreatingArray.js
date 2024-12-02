// array is collection of same or different type of multiple values in js unlike same type in other languages 
// index always starts with 0 ;
// last index = length-1 
// Array.size || Array.length = No of elements in array 
// by default javascript arrays are dynamic // it can be extendable at any time dynamically  
// Array methods as follows 
/*

1. push()  2.splice()  3.concat()  4.every(()=>{})  5.some(()=>{})  6.filter(()=>{})  7.find()  8.findIndex()
9.forEach()  10.includes()  11.indexOf()  12.map(()=>{})  13.flatMap()  14.reverse()  15.slice()  16.sort();
*/
// Array is represented as  []  square brackets in js 
// [] represents empty array
// default length of array is  0 
// Arrays Are Internally objects 
// console.log([]);
// console.log([].length);
// accessing  prices[index];  // or prices.at(index)
let prices=[30,45,63,"hello"];
console.log(prices);
console.log(prices.length);
console.log("Array using loop :")
for(let i=0;i<prices.length;i++){
    // console.log(prices[i]);
    console.log(prices.at(i));
    
}
// array with constructor   // second parameter is size /;ength of array 
// let arr=new Array(4);// constructor to define array  with all undefined values 
// // console.log(arr.at(3)+" Length=",arr.length);
// // arr.push(12,3,4,5,6); //adding multipl elements
// // console.log(arr);
// arr=[120,100,433,5];

// array of object 
var students =[
    {studentname:"Scott",age:18},
    {studentname:"bob",age:12},
    {studentname:"rober",age:88},
    {studentname:"nita",age:19},    
]
students.forEach(student => {
    console.log(`Name: ${student.studentname}| Age:${student.age}`)
});

let filteredStudents=students.filter(std=>{
    if(std.age<=18)
        return std;
});

console.log(filteredStudents);

let MappedStudents=students.map((std)=>std.age)
console.log(MappedStudents);

let ReducedArr=students.reduce((std1,std2)=>{return std1.age+std2.age } ) // returns single value

console.log("Reduced age :"+ReducedArr)