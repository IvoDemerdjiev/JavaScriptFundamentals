function Numbers (args) {
      var n=parseInt(args[0]);
      var combine="";
      for (var i = 1; i <= n; i++) {
        combine+=i + " ";
      }
      console.log(combine);
}
Numbers(["5"])
