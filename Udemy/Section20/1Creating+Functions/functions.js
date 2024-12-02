//functions
// getsimple interest variable acts as an delegate 
let getSimpleInterest = function(principle, rateOfInterest, noOfYears)
{ 
  let si = (principle * rateOfInterest * noOfYears) / 100;
  return (si);
};

function demo()
{
  console.log("Hello world");
}



let si1 = getSimpleInterest(1000, 6.7, 3);
let si2 = getSimpleInterest(7000, 4.5, 10);
console.log(si1);
console.log(si2);

getSimpleInterest=demo;
function hello(){
 console.log("hello")
}

getSimpleInterest=hello;

getSimpleInterest();  