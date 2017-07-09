function MatrixOfNumbers(args) {
    var n=parseInt(args[0]);
    var combine="";
    for (var i = 0; i < n; i++) {
          for (var j = i+1; j <= n+i; j++) {
            combine+=j;
          }
          console.log(combine);
          combine="";
    }
}
