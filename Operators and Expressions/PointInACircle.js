function PointInACircle(args) {
     let r = 2;
     let d=Math.sqrt(args[0]*args[0] + args[1]*args[1]);
     if(d.toFixed(2)>2){
       console.log("no" + " " + d.toFixed(2))
     }
     else{
       console.log("yes" + " " + d.toFixed(2))
     }
}
