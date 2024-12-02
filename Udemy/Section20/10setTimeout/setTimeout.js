//setTimeout
function SayHello()
{
  console.log("Hello");
}

function SayGoodBye()
{
  console.log("Good bye");
}

SayHello();
setTimeout(SayGoodBye, 5 * 1000); //Invokes SayGoodBye function after 5 seconds.
