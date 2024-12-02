//Immediately Invoked Functions
let printMe = function(value)
{
  console.log(`Your value is ${value}`);
}

printMe( 
  //immediately invoked function
  (function(n)
{
  return n * n;
})
(10) ); //call that IIF
//Output: 100
