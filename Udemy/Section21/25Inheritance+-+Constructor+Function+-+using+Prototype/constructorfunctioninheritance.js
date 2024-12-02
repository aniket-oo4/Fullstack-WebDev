//constructor function inheritance using "prototype" property of the constructor functions

//parent constructor function
function Person()
{
}
Person.prototype.personName = "Smith";
Person.prototype.age = 30;
Person.prototype.getDetails = function() {
  return `Person Name: ${this.personName}, Age: ${this.age}`;
};

//child constructor function
function Teacher()
{
  this.city = "London";
}

Teacher.prototype = Object.create(Person.prototype); //ineheritance
Teacher.prototype.mainSubject = "Medical Science";

var teacher = new Teacher();
console.log(Person.prototype); //{ personName: ..., age: ..., getDetails: ... } = object 1
console.log(Object.create(Person.prototype)); //{ __proto__: ref to object 1  } = object 2
console.log(Object.create(Person.prototype).__proto__); //object 1 as above
console.log(Teacher.prototype); //object 2 as above
console.log(new Teacher()); //{ __proto__: refers to object 2 }
console.log(new Teacher().__proto__); //object 2 as above

console.log(teacher.__proto__.__proto__); //object 1 as above

console.log(teacher.mainSubject);
console.log(teacher.city);
console.log(teacher.personName);
console.log(teacher.age);
console.log(teacher.getDetails());
