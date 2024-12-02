//callback functions
let Callback1 = function(name, age)
{
  console.log(`Callback 1: Name is ${name}, age is ${age}`);
};

let Callback2 = function(name, age)
{
  console.log(`Callback 2: Age is ${age}, Name is ${name}`);
}

function DoWork(name, age, myFunctionRef)
{
  name ="Mr " + name;
  age++;
  myFunctionRef(name, age); //Calls Callback2
}

//DoWork("Scott", 20, Callback1); //Pass reference of Callback1 to myFunctionRef
DoWork("Scott", 20, Callback2); //Pass reference of Callback2 to myFunctionRef


/*
function DoWork(name, age)
{
  name ="Mr " + name;
  age++;
  Callback1(name, age); // its not the calback function here its only called here
}
  */