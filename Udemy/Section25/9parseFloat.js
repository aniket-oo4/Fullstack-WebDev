//parseFloat
// parseint does not supports decimal palaces
// parse float supports decimal palces 


      var a = "10.23";
      var b = parseFloat(a);
      console.log("b:",b);
      console.log("typeof b:",typeof b);

      var c = "abcd";
      var d = parseFloat(c);
      console.log("d:",d);
      console.log("typeof d :",typeof d);

      var e = "123abcd";
      var f = parseFloat(e);
      console.log("f :",f);
      console.log("typeof f :",typeof f);

      var g = "abcd123";
      var h = parseFloat(g);
      console.log("h :",h);
      console.log("typeof h:",typeof h);

      var i = "";
      var j = parseFloat(i);
      console.log("j :",j);
      console.log("typeof j:",typeof j);

      var k = " ";
      var l = parseFloat(k);
      console.log("l :",l);
      console.log("typeof l",typeof l);
    
   