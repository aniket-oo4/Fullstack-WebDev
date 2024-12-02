// in js there is only one constructor is allowed
// js not allow constructor overloading 
//constructor name and the class name is not same constructor is constructor 


class Person {
    static cnt=1;
    personName = "";
     
    constructor(pName) {
        console.log("constructor executes",Person.cnt);
        Person.cnt++;
        // this.pername = "no Name";
        this.personName=pName;
    }
}
console.log(new Person("Axio"));
console.log(new Person("manio"));