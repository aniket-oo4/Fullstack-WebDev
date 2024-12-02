// [[],[],[],2,3].flat() // it converts the nested array into plain simple array 
// does not overwrites exisiting array
var a=[ 10,[20,30],40,50,[60,70,80]];
console.log(a);


var b=a.flat();
console.log("using flat: \n"+b);