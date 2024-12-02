//indexOf
      // it returns the index of first occurence given vlaue 
      // otherwise gives -1 
      // it also accepts the second parameter as start index to search 
      var a = "Hyderabad";
      var b = a.indexOf("e");
      console.log(a);
      console.log(b);

      var c = a.indexOf("era");// it returns the starting index of first occurence of given string
      console.log(c);

      var d = a.indexOf("x");
      console.log("indexOf(x)",d);  

      var e = a.indexOf("a")
      console.log(e); //first occurrence

      var f = a.indexOf("a", a.indexOf("a")+1); // second parameter is start index tosearch 
      console.log(f); //second occurrence


      // str.lastIndexOf("chars"); /// it returns the last index of specifed val
      var g= a.lastIndexOf("a");
      console.log(g); //last  occurrence (second occurrence)

      
      g= a.lastIndexOf("a",a.lastIndexOf("a")-1);  // second argument is start index of searching 
      console.log(g); 
   