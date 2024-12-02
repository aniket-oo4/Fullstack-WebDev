//"prototype" property of constructor function
var Student = function() {
};

//adding properties to "prototype" property of constructor function
Student.prototype.maths = 70;
Student.prototype.physics = 80;
Student.prototype.chemistry = 90;

//adding methods to "prototype" property of constructor function
Student.prototype.getTotalMarks = function() {
  return this.maths + this.physics + this.chemistry;
};

var s = new Student()
console.log(s);
console.log(s.__proto__);
console.log(s.maths);
console.log(s.physics);
console.log(s.chemistry);
console.log(s.getTotalMarks());

