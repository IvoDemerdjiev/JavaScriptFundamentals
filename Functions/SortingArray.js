function Sorting(args) {
    var
        arrayLength = +args[0],
        array = args[1].split(' ').map(Number);
    var index = 0;
    var arr = [arrayLength];
    var output = "";

    function maximalElement(array, arrayLength, index) {
        var max = 0;
        var bestMax = 0;
        var number = 0;
        for (var i = index; i < arrayLength; i++) {
            max = array[i];
            if (max > bestMax) {
                bestMax = max
                number = i;
            }
        }
        array.splice(number, 1);
        return bestMax;
    }

    function Sort(arr) {
        var x = 0;
        for (var i = 0; i < arrayLength; i++) {
            arr.unshift(maximalElement(array, arrayLength, index));
        }
        for (var i = 0; i < arr.length - 1; i++) {
            if (i==0) {
                output += arr[i];
            } else {
                output +=" " + arr[i];
            }
        }
        console.log(output);
    }
    Sort(arr)
}
Sorting(['10', '36 10 1 34 28 38 31 27 30 20']);
