function solve(args) {
  var input = args[0].split('\n'),
  arrayLength = input[0],
  array = input[1].split(' ').map(Number);

   function biggerThanNeighbours(array,arrayLength) {
      var index=0;
      for (var i = 1; i < arrayLength-1; i++) {
            if (array[i-1]<array[i] && array[i]>array[i+1]) {
                index=i;
                break;
            }
      }
    return index;
   }
   console.log(biggerThanNeighbours(array,arrayLength));
}

solve(['6\n-26 -25 -28 31 2 27']);
