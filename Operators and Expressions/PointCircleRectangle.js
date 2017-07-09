function solve(args) {
    var x = args[0];
    var y = args[1];
    var circle="in";
    var rectangle="in"
    if ((x - 1) * (x - 1) + (y - 1) * (y - 1) <= 1.5 * 1.5) {
        circle="inside circle";
    } else {
        circle="outside circle";
    }
    if ((x >= -1 && x <= 5) && (y <= 1 && y >= -1)) {
        rectangle="inside rectangle";
    } else {
        rectangle="outside rectangle";
    }
   console.log(circle + " " + rectangle);
}
