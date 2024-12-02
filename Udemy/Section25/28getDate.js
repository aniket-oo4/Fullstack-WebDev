//getDate();
// [1-31]
var a = new Date();
var b = a.getDate();

// getMonth();
//[0-11]; returns month as number 
var c = a.getMonth() + 1;

//getFullYear() ; returns full year ex 2021
// year
var d = a.getFullYear();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
var e = a.getMonth(); // returned digit 8
console.log(months[e]);


