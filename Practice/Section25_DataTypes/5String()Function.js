//functions of strings are different and String() function is different
//String()  if used to convert any value into "string "data type 
// syntax :  String(value);

let a=23;
let aa=String(a);
let b=true;
let bb=String(b);
let c=null;//its object
let cc=String(c); 

console.log("a:",a,"Typr of a:",typeof a,"| aa :",aa,"Typr of aa:",typeof aa);
console.log("a:",b,"Typr of a:",typeof b,"| aa :",bb,"Typr of bb:",typeof bb);
console.log("a:",c,"Typr of a:",typeof c,"| aa :",cc,"Typr of cc:",typeof cc);