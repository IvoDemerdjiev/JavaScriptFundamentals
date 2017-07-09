function Largest(args) {
    var input = args[0].split(' ')
    var a = +input[0];
    var b = +input[1];
    var c = +input[2];

    var temp = GetMax(a, b);
    console.log(GetMax(temp, c));

    function GetMax(a, b) {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    }
}

Largest(['8 3 6'])
