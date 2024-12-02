//destructuring function parameters

//var fun1 = function({ studentName, email, ...others })  // can also do like that  
var fun1 = function({ studentName: sn, email: em, dateOfBirth, ...others })
{
  console.log("fun1", sn, em); //fun1 Scott scott@gmail.com
  console.log(others, others.phone, others.city); //{ phone: '123456', city: 'London' } 123456 London
  console.log(dateOfBirth); //undefined
};

var student = { studentName: "Scott", email: "scott@gmail.com", phone: "123456", city: "London" };

fun1(student);
