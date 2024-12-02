// we can create set and get accessors directly using set get keywords prefixs


class Person {
    #personName;
    #age;

   set PersonName(value) {
        if (value == null || value == undefined) {
            console.log("Null || Undefined not alowed  for person name !!");
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

    get PersonName() {
        return this.#personName;
    }

    set Age(value) {

        if (value == null || value == undefined) {
            console.log("Null || Undefined not alowed  for age !!");
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



    get Age() {
        return this.#age;
    }



}


let person1 = new Person();
person1.PersonName=null;
console.log(person1.PersonName);