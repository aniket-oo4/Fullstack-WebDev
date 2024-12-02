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
}

Teacher.prototype = Object.create(Person.prototype); //ineheritance
Teacher.prototype.mainSubject = "Medical Sciences";
Teacher.prototype.getDetails = function() {
  return `${this.__proto__.getDetails()}, Main subject: ${this.mainSubject}`; //optionally invoke the parent method
};

//new object of parent constructor function
var person1 = new Person();
console.log(person1.getDetails()); //invokes Person.getDetails() method (parent's method)

//new object of child constructor function
var teacher1 = new Teacher();
console.log(teacher1.getDetails()); //invokes Teacher.getDetails() method (child's method)
