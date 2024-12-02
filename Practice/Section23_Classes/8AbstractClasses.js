// abstraction 
// hides the details to outside the object 
//   only allow access to some properties not all 
// hides internal implememnted 

class Person {
    personName;
    age;
    constructor(personName, age) {
        if(this.constructor==Person){ // this is built in property of every class  while creating a object it referes that class
            throw new Error("Abstract Class Person cannot be instantiated ");
        }
 
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

// var person=new Person("demo",99);
// console.log(person);

var teacher=new Teacher("teachr",90,"marathi");
console.log(teacher);
console.log(teacher.getDetails());