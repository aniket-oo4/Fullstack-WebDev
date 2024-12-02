// polymorphism

class Person {
    personName;
    age;
    constructor(personName, age) {
        this.personName = personName;
        this.age = age;
    }

    getDetails() {
        return ` Person name :${this.personName} , Age :${this.age} `;
    }
}

class Teacher extends Person {
    mainSubject;
    constructor(personName, age, mainSubject) {
        super(personName, age);
        this.mainSubject = mainSubject;
    }
    getDetails(){
        console.log(super.getDetails());// it is optional to  call parent class method useif needed 
        return ` Main Subject :${this.mainSubject}`; // overrided method of parent class it only calls child method 
    }
}

var person=new Person("demo",99);
console.log(person);

var teacher=new Teacher("teachr",90,"marathi");
console.log(teacher);
console.log(teacher.getDetails());