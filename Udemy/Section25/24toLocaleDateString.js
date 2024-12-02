//toLocaleDateString() // return local device Date 
// it returns only Date in format of string it return date of local device only
//  return format is mm//dd/yyyy
      var a = new Date(); // Date() is constructor function
      var b = a.toLocaleDateString();//  -> 4/9/2024 :: mm/dd/yyyy
      console.log(a);
      console.log(b);
console.log(a.getMonth());
      console.log(a.toLocaleTimeString()); // it will return current time of local machine  
     
