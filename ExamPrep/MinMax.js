function solve(params) {
 var n = parseInt(params[0]),
 k = parseInt(params[1]),
 m=0,
 min=900000000000,
 max=-90000000000,
 arr=[],
 numbers = params[2].split(' ').map(Number);
    for (var i = 0; i < n; i++) {
      if (i+k>n) {
        break;
      }
       m=i;
       max=-999999990;
       min=9000000000;
      for (var j = 0; j < k; j++) {
        if (numbers[m]<min) {
          min=numbers[m];
        }
        if (numbers[m]>max) {
          max=numbers[m];
        }
        if (j==k-1) {
          arr[i]=max+min;
        }
                  m++;
      }
    }

    console.log(arr.toString());
}

solve(['4',
'2',
'1 3 1 8']);
