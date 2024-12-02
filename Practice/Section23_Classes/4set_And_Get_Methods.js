class Person {
    #personName;
    #age;

    setPersonName(value) {
        if (value == null || value == undefined) {
            console.log("Null || Undefined not allowed  for person name !!");
        }
        else {
            if (value.length > 30) {
                console.log("Name is TOO Long  !!");
            }
            else {
                this.#personName = value;
            }
        }
    }

    getPersonName() {
        return this.#personName;
    }

    setAge(value) {

        if (value == null || value == undefined) {
            console.log("Null || Undefined not allowed  for age !!");
        }
        else {
            if (value > 60 || value < 18) {
                console.log("age is not allowed  !!");
            }
            else {
                this.#age = value;
            }
        }
    }



    getAge() {
        return this.#age;
    }



}


let person1 = new Person();
person1.setAge(19);
console.log(person1.getAge());