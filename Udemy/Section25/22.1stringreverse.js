let str=" hello ";

let front=0,rear=str.length-1;
console.log("Before sorting :",str,front,rear );
if(front==rear)
{
    console.log("String is empty");
}
else{

    while(front!=rear)
    {
        let temp=str[front];
        console.log(temp);
        str[front]=str[rear];
        str[rear]=temp; 
        console.log(str[rear]);   
        front++;
        rear--;  
          
    }
    // above functionality does not change exisiting string it is immutable 
    console.log("After while logic :",str);
    let revStr=str.split('').reverse().join('');// join converts array into string 
    console.log("Reversed string :",revStr);
}