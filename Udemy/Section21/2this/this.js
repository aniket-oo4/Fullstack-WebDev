//object literals with "this" keyword
//this = current object

var person = {
  personName: "Scott", //property
  birthDay: //method
  function() { 
    console.log(this);
    return `Happy Birthday to ${this.personName}`;
  }
};

this.x = 100;
console.log(this);
//console.log(person);
//console.log(person.personName); //call the property
console.log(person.birthDay()); //call the method
