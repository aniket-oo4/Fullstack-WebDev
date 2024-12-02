//let
var x = 10; //global variable // variable declaration of var hoisted at top of the page 
let y = 10; //global variable    // variable decalration  of let is not hoisted 

if (1 == 1)
{
  let z = 10; //block level variable

}
//console.log(z); //Error

console.log("for loop:");
for (let i = 1; i<= 5; i++)
{
  console.log(i);
}
//console.log(i); //Error
