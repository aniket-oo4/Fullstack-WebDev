//lexical environment
let x = 10;
console.log(x);
function fun1()
{
  let y = 20;
  console.log(x, y);

  function fun2()
  {
    let z = 30;
    let y = 100;

    if (1 == 1)
    {
      let p = 1000;
      var q = 2000;
    }
    console.log(x, y, z);
  }
  fun2();
}
fun1();
