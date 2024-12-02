//Inheritance with Constructor Functions - using "call" method
//Parent constructor function: Teacher
var Teacher = function(teacherName)
{
  this.teacherName = teacherName;
};

//Child Parent constructor function: PhysicsTeacher
var PhysicsTeacher = function(teacherName, mainSubject)
{
  Teacher.call(this, teacherName); //invoke the parent constructor function using "call"; supply current object to "this" keyword of parent constructor function.
  this.mainSubject = mainSubject;
}

var physicsTeacher = new PhysicsTeacher("Scott", "Physics");
console.log(physicsTeacher);
console.log(physicsTeacher.teacherName); //parent constructor function's property
console.log(physicsTeacher.mainSubject); //child constructor's property
