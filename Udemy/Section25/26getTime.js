//getTime();
// it will returns the no.of milliseconds since 1/1970 12:00 Am
// 1000milliseconds =1 second
      var a = new Date();
      var b = a.getTime();
      console.log(a);
      console.log(b);       //total   seconds|minute|hours|days|years
      console.log("total years :", ((((b/1000)/60)/60)/24)/365);

