//parseInt()
      var a = "10.23";
      var b = parseInt(a);
      console.log("b:",b);
      console.log("typeof b:",typeof b);

      var c = "abcd";
      var d = parseInt(c);
      console.log("d:",d);
      console.log("typeof d :",typeof d);

      var e = "123abcd121223"; // first few numbeer were taken and other part from where there is no numbr is ignored 
      var f = parseInt(e);
      console.log("f :",f);
      console.log("typeof f :",typeof f);

      var g = "abcd123";// it will return NAN because of it starts with alphabet hence from that position searching is stopped 
      var h = parseInt(g);
      console.log("h :",h);
      console.log("typeof h:",typeof h);

      var i = "";// in case empty is return NAN
      var j = parseInt(i);
      console.log("j :",j);
      console.log("typeof j:",typeof j);

      var k = " ";// Also for space it is NAN
      var l = parseInt(k);
      console.log("l :",l);
      console.log("typeof l",typeof l);

