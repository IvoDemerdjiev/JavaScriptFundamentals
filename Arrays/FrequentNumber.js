function solve(items) {
    var
        arr = items[0].split('\n'),
        n = +arr[0],
        array = arr.slice(1),
        len = arr.length,
        number,
        bestRep = 0,
        rep = 1;

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
    for (var i = 0; i < array.length - 1; i++) {
        if (+array[i] === +array[i + 1]) {
            rep++;
            if (rep > bestRep) {
                bestRep = rep
                number = array[i]
            }
        } else {
            rep = 1;
        }
    }
    console.log(number + " " + '(' + bestRep + " times" + ')');
}

solve(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']);
['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']
