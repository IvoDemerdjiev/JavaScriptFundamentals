function ThirdDigit(args) {
    var digit = (args / 100) % 10 | 0,
        check = digit == 7; // round with | 0

    if (check) {
        return console.log(check);
    } else {
        return console.log('false ' + digit);
    }
}

ThirdDigit(agfsd)
