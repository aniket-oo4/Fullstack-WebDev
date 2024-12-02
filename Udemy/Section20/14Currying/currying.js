//no currying
// var multiply = function(a, b, c)
// {
//   return a * b * c;
// }
// console.log(multiply(1, 2, 3));

//currying - multiply
var multiply = function(a) //first function
{
  return function(b) //second function
  {
    let result1 = a * b;
    return function(c) //third function
    {
      let result2 = result1 * c;
      return result2;
    };
  };
};

let fun2 = multiply(10); //calls first function
let fun3 = fun2(20); //calls second function
console.log(fun3(30)); //calls third function

console.log(multiply(10)(20)(30)); //calls first function; and then second function and the third function

