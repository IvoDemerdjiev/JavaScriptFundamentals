function TheBiggestOfFiveNumbers(args) {
  var len=args.length-1;
  var swapped;
  do {
      swapped = false;
      for (var i=0; i < args.length-1; i++) {
          if (parseFloat(args[i]) > parseFloat(args[i+1])) {
              var temp = args[i];
              args[i] = args[i+1];
              args[i+1] = temp;
              swapped = true;
          }
      }
  } while (swapped);

    console.log(args[len]);
}
