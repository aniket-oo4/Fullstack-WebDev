//currying
//Output: @Scott: Hai at 10:30 am - From Harsha

let logMessage = function(receiver) { //first function
  let result1 = `@${receiver}`;
  return function(message) { //second function
    let result2 = `${result1}: ${message}`;

    return function(hours, minutes, timePeriod) //third function
    {
      let result3 = `${result2} at ${hours}:${minutes} ${timePeriod}`;

      return function(sender) { //fourth function
        let result4 = `${result3} - From ${sender}`;
        return result4;
      };
    };
  };
};

console.log(logMessage("Scott")("Hi")(10, 30, "am")("Harsha"));
