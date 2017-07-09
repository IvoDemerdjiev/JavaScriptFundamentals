function solve(params) {
    var nk = params[0].split(' ').map(Number),
        s = params[1].split(' ').map(Number),
        arr = [len],
        len = nk[0],
        numberOfLoops = nk[1],
        result=0;
    for (var i = 0; i < numberOfLoops; i++) {
        for (var j = 0; j < len; j += 1) {
            if (j == 0 && s[0] % 2 == 1) {
                if (s[0] == 1) {
                    arr[0] = s[len - 1] + s[j + 1]
                } else {
                    arr[0] = Math.min(s[len - 1], s[j + 1]);
                }
            }
            if (j == 0 && s[0] % 2 == 0) {
                if (s[0] == 0) {
                    arr[0] = Math.abs(s[len - 1] - s[j + 1]);
                } else {
                    arr[0] = Math.max(s[len - 1], s[j + 1]);
                }
            }
            if (j == len - 1 && s[len - 1] % 2 == 1) {
                if (s[len - 1] == 1) {
                    arr[len - 1] = s[len - 2] + s[0]
                } else {
                    arr[len - 1] = Math.min(s[0], s[len - 2]);
                }
            }
            if (j == len - 1 && s[len - 1] % 2 == 0) {
                if (s[len - 1] == 0) {
                    arr[len - 1] = Math.abs(s[len - 2] - s[0]);
                } else {
                    arr[len - 1] = Math.max(s[len - 2], s[0]);
                }
            }
            if (s[j] % 2 == 0 && j != 0 && j != len - 1) {
                if (s[j] == 0) {
                    arr[j] = Math.abs(s[j - 1] - s[j + 1]);
                } else {
                    arr[j] = Math.max(s[j - 1], s[j + 1]);
                }
            }
            if (s[j] % 2 == 1 && j != 0 && j != len - 1) {
                if (s[j] == 1) {
                    arr[j] = s[j - 1] + s[j + 1];
                } else {
                    arr[j] = Math.min(s[j - 1], s[j + 1]);
                }
            }
        }
        s=arr.slice();
    }
    for (var i = 0; i < arr.length; i++) {
      result+=s[i];
    }
    console.log(result);
}

solve(['5 1',
'9 0 2 4 1'])
