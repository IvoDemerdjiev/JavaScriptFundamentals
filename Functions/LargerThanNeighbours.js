function solve(args) {
  var input = args[0].split('\n'),
  arrayLength = input[0],
  array = input[1].split(' ').map(Number);

   function biggerThanNeighbours(array,arrayLength) {
      var count=0;
      for (var i = 1; i < arrayLength-1; i++) {
            if (array[i-1]<array[i] && array[i]>array[i+1]) {
              count++;
            }
      }
    return count;
   }
   console.log(biggerThanNeighbours(array,arrayLength));
}

solve(['6\n-26 -25 -28 31 2 27']);
