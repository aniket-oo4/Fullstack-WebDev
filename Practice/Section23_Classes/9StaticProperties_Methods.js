// "static" keyword is used to declare static properties and methods 
// for accessing  static properties or methdos us Class name 
// Class.staticProp  Class.StaticMethodCall() 


class Student {
    marks;
    static cnt = 0;  // static properties
    constructor(marks) {
        this.marks = marks;
        Student.cnt++;
    }

    static compareStudentMarks(std1, std2) {// static method 
        return std1.marks - std2.marks;
    }
}

var a = new Student(200);
var b = new Student(120);


console.log(Student.cnt);
console.log(Student.compareStudentMarks(a, b));