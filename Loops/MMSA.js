function MMSA(args) {
    var len=args.length;
    var temp=0;
    var min=9999999;
    var max=-9999999;
    var sum=0;
    var avg=0;

    for (var i = 0; i < len; i++) {
        temp=parseFloat(args[i]);
        if (temp>max) {
          max=temp;
        }
        if (temp<min) {
          min=temp
        }
      sum+=parseFloat(args[i]);
      avg=sum/len;
    }
    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + avg.toFixed(2));
}

MMSA(["2","-1","4"])
/*2
5
1	min=1.00
max=5.00
sum=8.00
avg=2.67*/
