//new keyword
var Employee = function(employeeName, employeeId, salary) {
  //initialize properties & methods into that object
  this.employeeName = employeeName;
  this.employeeId = employeeId,
  this.salary = salary;

  this.getEmployeeName = function() {
    return this.employeeName;
  };
};

var employee1 = new Employee("Scott", 1, 1000);
var employee2 = new Employee("Allen", 2, 2000);

console.log(employee1);
console.log(employee2);
