function solve(args) {
  var arr = (args + '').split('\n'),
          n = +arr[0],
          x = +arr[arr.length - 1],
          min = 0,
          max = n - 1,
          mid = 0;

      arr.shift();
      arr.pop();
      while (min <= max) {

          mid = ((min + max) / 2) | 0;

          if (x === +arr[mid]) {
              return mid;
          }
          else if (x < +arr[mid]) {
              max = mid - 1;
          }
          else {
              min = mid + 1;
          }
      }
    console.log('-1');
}

solve(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n25']);
