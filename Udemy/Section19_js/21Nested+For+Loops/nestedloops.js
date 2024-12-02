/*
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5 */
var str = "";
for (let i = 1; i < 7; i++) //outer loop
{
  for (let j = 1; j <= 5; j++) {
    str = `${str}${j} `;
  }
  str = `${str}\n`;
}
console.log(str);



var str=``;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
     str+='*';
  }
  str+="\n";
}
console.log(str);

