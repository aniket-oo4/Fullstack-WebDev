//polymorphism using objects
var person = {
  personName: "John",
  age: 20,
  getDetails: function() {
    return `Person Name: ${this.personName}. His age is: ${this.age}`;
  }
};

var teacher = {
  mainSubject: "Maths",
  getDetails: function()
  {
    return `${this.__proto__.getDetails()}. Teacher's main subject: ${this.mainSubject}`; //optionally invoke parent method using this.__proto__.method();
  }
};

teacher.__proto__ = person; //inheritance
console.log(teacher.getDetails()); //calls child method
