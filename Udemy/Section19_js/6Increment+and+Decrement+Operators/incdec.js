var a = 10;
console.log(a); //Output: 10
var b = ++a; //a = 11 first; b = 11 (pre increment)
console.log(a, b); //Output: 11, 11

a = 10;
b = a++; //b = 10 first; a = 11 (post increment)
console.log(a, b); //Output: 11, 10

a = 10;
b = --a; //a = 9 first; b = 9 (pre decrementation)
console.log(a, b); //Output: 9, 9

a = 10;
b = a--; //b = 10 first; a = 9 (post decremenation)
console.log(a, b); //Output: 9, 10
