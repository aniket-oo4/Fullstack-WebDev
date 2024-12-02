//Higher order functions
let doSomeWork = function() {
  return function() {
    return "Hello";
  };
};

let result = doSomeWork(); //call doSomeWork function and get the returned function
//console.log(result()); //Hello


//Area of circle: PI * r * r
//PI = 3.14...
//Higher order functions
function getAreaOfCircle(radius)
{
  //return a function from HOF
  return function()
  {
    return Math.PI * radius * radius;
  };
};

let area = getAreaOfCircle(5); //Call HOF and get the returned function.
console.log(area()); //Call the function that was returned by HOF
