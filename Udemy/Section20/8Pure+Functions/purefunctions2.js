//pure functions
//Username: system, Password: 123
// impure function :==
let isValidLogin = function(username, password)
{
  if (username == "system" && password == "123")
    return true;
  else
    return false;
}

console.log(isValidLogin("abc", "def"));
