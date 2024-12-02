// inheritance is acheived using extends keyword  but it internally converted automatically into traditional object that uses __proto__ for inheritance 
// and to access parent constructor and methods and properties we use " super" keyword 
//dif between tradition obj and classbased obj is in class based properties of parent and child are stored in child itself butin tradition properties are stored separately we need __proto__ to access them 
// if we create constructor in child then it is must to call the parent class constructor using super keyword 

class Teacher {
    teacherName;
    constructor(teacherName) {
        this.teacherName = teacherName;
    }
}
class PhysicsTeacher extends Teacher {
    mainSubject;
    constructor(teacherName,mainSubject){
        super(teacherName);
        this.mainSubject=mainSubject;

    }
}
console.log(new Teacher("hello"));
console.log(new PhysicsTeacher("mi","Phsi"));

console.log();
console.log(Object.keys(new PhysicsTeacher("mi","Phsi")));
