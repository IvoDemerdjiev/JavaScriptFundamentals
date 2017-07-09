function Compare(args) {
    var str = args[0].split('\n');
    var answer = str[0].localeCompare(str[1]);
    if (answer == 1) {
        console.log('>');
    } else if (answer == -1) {
        console.log('<');
    } else if(answer === 0) {
        console.log('=');
    }
}
