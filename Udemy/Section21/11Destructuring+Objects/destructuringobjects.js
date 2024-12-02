//destructuring objects
// copying the value from the property and assigning it to the variables 

var person = { firstName: "Smith", lastName: "John", age: 25, email: "test@example.com", city: "New York", country: "USA" };
// var fn = person.firstName;
// var ln = person.lastName;
// var g = person.age;

// { property:variable}   //  ...  (means rest of all || All  Remaining  properties )
var { firstName: fn, lastName: ln, age, email = "someone@example.com", ...other } = person;
console.log(fn); //Smith
console.log(ln); //John
console.log(age); //25
console.log(email); //someone@example.com
console.log(other); //{ city: "New York", country: "USA" }

