//self invoking closure
//closure begins
var bankAccount = (function()
{
  var accountBalance = 1000;
  var somePrivate = function() {

  };
  var deposit = function(depositAmount)
  {
    accountBalance = accountBalance + depositAmount;
  };
  var withdraw = function(withdrawAmount)
  {
    accountBalance = accountBalance - withdrawAmount;
  };

  var getCurrentBalance = function()
  {
    return accountBalance;
  }

  return { deposit, withdraw, getCurrentBalance }; //return public methods
})();
//closure ends

console.log(`Initial Account Balance: ${bankAccount.getCurrentBalance()}`); //1000

bankAccount.deposit(200);
console.log(`Account Balance after Deposit: ${bankAccount.getCurrentBalance()}`); //1200

bankAccount.withdraw(50);
console.log(`Account Balance after Withdraw: ${bankAccount.getCurrentBalance()}`); //1150
