function solve(params) {
    var s = params[0].split(' ').map(Number);
    var len = s[0];
    var sum = 0;
    var answer = -20000000000000000000;
    for (var i = 1; i <= len; i++) {
        sum += s[i];
        if (sum > answer) {
            answer = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    console.log(answer);
}

solve(['6 1 3 5 8 7 6']);
