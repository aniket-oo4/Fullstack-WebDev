class Employee {
    empId;
    name;
    age;
    salary;
    display() {
        this.salary *= 3;
        console.log("name:" + this.name + "\n" + "emp Id:" + this.empId + "\n Age:" + this.age + "\nSalary:" + this.salary)

    }
}
let emp1 = new Employee();
emp1.display();
emp1.name = "aniket";
emp1.empId = 1;
emp1.age = 20;
emp1.salary = 100000;


emp1.display();
var emp2=new  Employee();
emp2.display();

class Person extends Employee{

    marks;
    display(){
        console.log("Display in Child :");

       super.display();
        console.log("Maekse :"+this.marks)
    }
}
let p1=new Person();
p1.name="aniket";
p1.display();
