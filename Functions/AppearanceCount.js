function solve(args) {
  var input = args[0].split('\n'),
       arrayLength = input[0],
       array = input[1].split(' ').map(Number),
       x = input[2],
       count=0;

       for (var i = 0; i < arrayLength-1; i++) {
         console.log(count);
             if (array[i]==x) {
                 count++;
             }
       }
       console.log(count);
}

solve(['8\n28 6 21 6 -7856 73 73 -56\n73']);
