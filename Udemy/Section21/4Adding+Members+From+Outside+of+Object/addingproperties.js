//adding properties and methods to an existing object
var student = {};
console.log(student);

student.marks = 70; //adding property
student.getResult = function () { //adding method
  if (this.marks >= 35)
    return "Pass";
  else
    return "Fail";
};

console.log(student);
console.log(student.marks); //call property
console.log(student.getResult()); //call method
