//accessing properties from objects in JS
let customer = {
  customerName: "Scott",
  email: "scott@test.com",
  1: "hello" };  // here number automatically conveted into string "1"
console.log(customer.customerName); //dot notation
console.log(customer["customerName"]); //brackets notation

customer.email = "scott@example.com"; //dot notation
console.log(customer["email"]); //brackets notation
console.log(customer[1]); //brackets notation   also as customer["1"] 
console.log(customer);
