function Sign(args) {
    let a = args[0];
    let b = args[1];
    let c = args[2];
    let count = 1;

    if (a >= 0) {
        count*=1;
    } else {
        count*=-1;
    }

    if (b >= 0) {
        count*=1;
    } else {
        count*=-1;
    }

    if (c >= 0) {
        count*=1;
    } else {
        count*=-1;
    }

    if (a == 0 || b == 0 || c == 0) {
        count = 0;
    }

    if (count > 0) {
        console.log("+");
    } if(count < 0) {
        console.log("-");
    } if (count==0) {
      console.log("0")
    }
}

Sign(["3","4","-2"])
5
2
2
