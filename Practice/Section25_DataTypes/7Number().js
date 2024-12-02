/* ALT+Z == Word Wrap
• The "Number()" is a pre-defined function, which is used to convert string to number.
• It returns "NaN", if the string is alphanumerical / alphabetic. "Nan" stands for "Not A Number",
which indicates the value is not a number. 
The datatype of "NaN" is "number".
• It returns "0", if the string is empty / space.
Syntax: Number(string value

*/
var a="2";
var aa=Number(a);
console.log("a:",a,"Typr of a:",typeof a,"| aa :",aa,"Typr of aa:",typeof aa);

var b="213Hello";
var bb=Number(b);// NAN;
console.log("a:",b,"Typr of a:",typeof b,"| aa :",bb,"Typr of bb:",typeof bb);

var c="";
var cc=Number(c); //0
console.log("a:",c,"Typr of a:",typeof c,"| aa :",cc,"Typr of cc:",typeof cc);



