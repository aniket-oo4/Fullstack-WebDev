//proto chain (prototype chain)
var person = { personName: "John", age: 20 };
var student = { rollNo: 10, marks: 70 };
var medicalStudent = { mainSubject: "Biology" };
student.__proto__ = person;
medicalStudent.__proto__ = student;

console.log(medicalStudent, medicalStudent.__proto__);
console.log(student, student.__proto__);
console.log(person, person.__proto__);

console.log(medicalStudent.personName);
