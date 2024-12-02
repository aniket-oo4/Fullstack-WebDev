// in ECma Script we can  able to write the private properties and private methods  prefixed with '#'
// ECMA Script only have 2 access modifiers Public and Private which is recently introduced 



class Customer {

    customerId;
    customerName;
    #creditCardNumber;
    constructor(customerId, customerName, creditCardNumber) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.#creditCardNumber = creditCardNumber;
        console.log("" + this.#getCreditCardNo()); // private priperties and methods accessible only within class
    }
    #getCreditCardNo() {
        return this.#creditCardNumber;
    }
    getterCCNo() {
        return this.#creditCardNumber;
    }
}


var customer1 = new Customer(1, "brayn", 12231312);
console.log("Name:" + customer1.customerName + "\n Id::" + customer1.customerId)
// console.log("CC NO:"+customer1.#getCreditCardNo()); // private method are not accessible 
console.log("CC NO:"+customer1.getterCCNo());// implemented  encapsulation 
console.log(customer1)  