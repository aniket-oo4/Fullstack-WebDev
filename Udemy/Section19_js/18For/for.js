//for: incremented loop: 1 to 5
console.log("incremented loop:");
for (var i = 1; i <= 5; i++)  // global i
{
  console.log(i);
}

//for: decremented loop: 5 to 1
console.log("decremented loop:");
for (let i = 5; i >= 1; i--)  // block level i 
{
  console.log(i);
}

console.log("  Value of i :"+ i)
