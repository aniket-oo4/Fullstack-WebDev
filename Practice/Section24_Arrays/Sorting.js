// let arr=["10","22","3",'4',"55","33","644","65","24","553","9","7","443"];
let arr=[10,22,3,4,55,33,644,65,24,553,9,7,443];

console.log(arr);

arr=arr.sort();// comparer function passes 
console.log("Without comparer :\n"+arr)

arr=arr.sort(myComparer);// comparer function passes 
console.log("after sorting with comparer  ::\n"+arr);

function myComparer (a,b){
    return a-b;
}
/*
a=10,b=2
a-b=8 positive swap a=b b=a;| value>next
a=10,b=12
a-b=-2 negative  no swap pass key forward  |value<next
a=10,b=10;
a-b=0 0 matched value no swap |  value==next

*/