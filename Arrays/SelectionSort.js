function solve(items) {
    var
        arr = items[0].split('\n'),
        n = +arr[0],
        array = arr.slice(1),
        len = arr.length,
        min;

    function swap(items, firstIndex, secondIndex) {
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    for (i = 0; i < len; i++) {

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j = i + 1; j < len; j++) {
            if (+array[j] < +array[min]) {
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min) {
            swap(array, i, min);
        }
    }

  console.log(array.join('\n'));
}

solve(['6\n3\n4\n1\n5\n2\n6\n2\n2']);
['6', '3', '4', '1', '5', '2', '6']
