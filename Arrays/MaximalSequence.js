function solve(args) {
  var
  sequence = 1,
  longestSequence = 1,
  arr = args[0].split('\n'),
  n = +arr[0],
  array = arr.slice(1),
  len = arr.length;
       for (var i = 0; i < len-1; i++) {
              if (+array[i]===+array[i+1]) {
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

solve(['13\n1\n1\n1\n4\n4\n4\n4\n4\n1\n2\n2\n9\n3']);
