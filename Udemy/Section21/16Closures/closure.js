//closure - simple example



function bankAccountDeposit()
{
  var currentBalance = 1000;

  let deposit = function(depositAmount)
  {
    currentBalance = currentBalance + depositAmount;
    return `Account Balance: ${currentBalance}`;
  }

  return deposit;
}

var dp = bankAccountDeposit();
console.log(dp(200)); //Output: 1200
//console.log(currentBalance);
console.log(dp(150)); //Output: 1350
