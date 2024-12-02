//Number()
      var a = "10";
      console.log(a); //10 as string
      console.log(typeof a); //string
      var b = Number(a);
      console.log(b); //10 as number
      console.log(typeof b); //number
      console.log("----------------------------");

      var c = "abcd";
      var d = Number(c);
      console.log(d); //NaN
      console.log(typeof d); //number
      console.log("----------------------------");

      var e = "abcd123";
      var f = Number(e);
      console.log(f); //NaN
      console.log(typeof f); //number
      console.log("----------------------------");

      var g = "";
      var h = Number(g);
      console.log(h); //0
      console.log(typeof h); //number
      console.log("----------------------------");

      var i = " ";
      var j = Number(i);
      console.log(j); //0
      console.log(typeof j); //number
      console.log("----------------------------");
   