//setInterval
function callBack()
{
  console.log("Hello");
}

let myInterval = setInterval(callBack, 2000); //calls the callBack after every 2 sec.


function stopInterval()
{
  clearInterval(myInterval); //stop setInterval
  console.log("Interval stopped");
}

setTimeout(stopInterval, 20 * 1000); //call stopInterval function after 20 seconds.
