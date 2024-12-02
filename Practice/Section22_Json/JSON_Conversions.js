var stu={
    name:"aniket",
    age:20,
    post:"engineer"

}
myjson=JSON.stringify(stu);   //object to string(json)   
console.log(myjson,"Type:",typeof myjson);

myObj=JSON.parse(myjson); //string(json) to object 
console.log(myObj);