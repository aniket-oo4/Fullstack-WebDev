//scope of variables   with concept of hoisting 
console.log("before global variables");
console.log(a); //accessible
//console.log(b); //not accessible
var a = 10; //global variable
let b = 20; //global variable

console.log("after global variables");
console.log(a); //accessible
console.log(b); //accessible

function myFunction(parameter)
{
  console.log("before local variables");
  console.log(a); //accessible
  console.log(b); //accessible
  console.log(c); //accessible
  //console.log(d); //not accessible

  var c = 30; //local variable
  let d = 40; //local variable

  console.log("after local variables");
  console.log(a); //accessible
  console.log(b); //accessible
  console.log(c); //accessible
  console.log(d); //accessible

  if (c == c)
  {
    console.log("before block variables");
    console.log(a); //accessible
    console.log(b); //accessible
    console.log(c); //accessible
    console.log(d); //accessible
    console.log(e); //accessible
    //console.log(f); //not accessible cause of let keyword 

    var e = 50; //local variable
    let f = 60; //block level
    
    console.log("after block variables");
    console.log(a); //accessible
    console.log(b); //accessible
    console.log(c); //accessible
    console.log(d); //accessible
    console.log(e); //accessible
    console.log(f); //accessible
  } //end of block

  console.log("after block - within function");
  console.log(a); //accessible
  console.log(b); //accessible
  console.log(c); //accessible
  console.log(d); //accessible
} //end of function
myFunction();

console.log("after global - outside function");
console.log(a); //accessible
console.log(b); //accessible


