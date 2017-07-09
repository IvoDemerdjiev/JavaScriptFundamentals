function solve(args) {
  var
  sequence = 1,
  longestSequence = 1,
  arr = args[0].split('\n'),
  n = +arr[0],
  array = arr.slice(1),
  len = arr.length;
       for (var i = 0; i < len-1; i++) {
              if (+array[i]<+array[i+1]) {
                sequence++;
                if (sequence>longestSequence) {
                  longestSequence=sequence;
                }
              }
              else {
                sequence=1;
              }
        }
          console.log(longestSequence);
}

solve(['8\n7\n3\n2\n3\n4\n2\n2\n4']);
['8', '7', '3', '2', '3', '4', '2', '2', '4']
