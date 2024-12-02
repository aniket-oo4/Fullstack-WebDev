// [].indexOf(value); index of first occurence of given value otherwise -1 ;
// Returns index of the first occurence of the given value in the Array;.
// console.clear(); // clears screen when display
//arr.indexOf(valueToSearch, startIndex);

let arr=[1,2,3,44,3,4];

console.log(arr.indexOf(223));//-1
console.log(arr.indexOf(3));//2

// returning all matching element without using filter 
let index=0;
while(index!=-1)
{
    index=arr.indexOf(3,index+1); // second parameter is start index 
    if(index==-1)
        break;
    console.log(`position :${index} ,`);
    
}


// [].lastIndexOf(value); index of last occurence  of given value otherwise -1 ;
// [].lastIndexOf(value,StartIndex);  it goes backward to forward 

console.log(arr.lastIndexOf(3));//4
console.log(arr.lastIndexOf(3, arr.lastIndexOf(3)-1));//2

