//arrays
var prices = [ 50, 80, 300 ];
prices[0] = 450;
console.log(prices);
console.log(prices.length);

console.log("Prices using loop:")
for (let i = 0; i < prices.length; i++)
{
  console.log(prices[i]);
}

//array of objects
var students = [
  { studentName: "Jones", age: 17 },
  { studentName: "Scott", age: 15 },
  { studentName: "Smith", age: 20 },
  { studentName: "John", age: 15 }
];
console.log(students.length);
console.log("Students using loop:")
for (let i = 0; i < students.length; i++)
{
  console.log(`Student Name: ${students[i].studentName}, Age: ${students[i].age}`);
}
