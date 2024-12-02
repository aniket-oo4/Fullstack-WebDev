/*

==  ::compares only "value" of both operands, First ,the right side operand gets automatically converted into data type of left side operand and then comparison performed 
let a=1;
let b="1";
=== ::it  compares both "value" and "data types" of operands.,No Conversion done ; the operands will be compared "as-It-is".  
a==b
a===b
*/
let a=1;
let b="1";
console.log(a==b);  // returns true because right operand converted into left operand data type 

console.log(a===b);  // returns false .data type also compared