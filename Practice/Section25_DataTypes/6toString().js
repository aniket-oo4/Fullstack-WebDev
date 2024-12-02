/*
value.toString(); 
used to convert only numeric  value into String Data type

diff btwn 
String() and toString();
String () it is Global function used with any data type 
toString():  is a method only used with numbers and booleans also
*/

let a=12;
let aa=a.toString();
console.log("a:",a,"Type of a:",typeof a,"| aa :",aa,"Typr of aa:",typeof aa);

let b={name:"hello"};
let bb=b.toString();  // Exception not alloed with other Data tyes 
console.log("a:",b,"Type of a:",typeof b,"| aa :",bb,"Typr of b:",typeof bb);
