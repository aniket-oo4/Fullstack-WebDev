//Inheritance with Constructor Functions - using "call" method
//Parent constructor function: Teacher
var Teacher = function(teacherName)
{
  this.teacherName = teacherName;
};

//Child Parent constructor function: PhysicsTeacher
var PhysicsTeacher = function(mainSubject)
{
  this.mainSubject = mainSubject;
}

var physicsTeacher = new PhysicsTeacher("Physics");
physicsTeacher.__proto__ = new Teacher("Scott"); //__proto__ property of child object stores reference of parent object.
console.log(physicsTeacher);
console.log(physicsTeacher.teacherName); //parent constructor function's property
console.log(physicsTeacher.mainSubject); //child constructor's property
