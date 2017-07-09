function QuadraticEquation(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var c = parseFloat(args[2]);
    var temp=0;


    var D = b * b - 4 * a * c;
    if (D > 0) {
        var x1 = (b + Math.sqrt(D)) / (2 * a);
        var x2 = (b - Math.sqrt(D)) / (2 * a);
        if (x2 < x1) {
            console.log("x1=" + x1.toFixed(2) + "; x2=" + x2.toFixed(2));
        }
        else{
          console.log("x1=" + x2.toFixed(2) + "; x2=" + x1.toFixed(2));
        }
    }
    if (D == 0) {
        var x1 = b / (2 * a);
        console.log("x1=x2=" + x1.toFixed(2));
    } else if (D < 0) {
        console.log("no real roots");
    }
}
QuadraticEquation(["2","5","-3"])
