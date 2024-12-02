//call function inside another function
let square = function(n)
{
  return n * n;
};

let cube = function(n)
{
  return square(n) * n;
};

let result = cube(5);
console.log(result);
