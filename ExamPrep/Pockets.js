function solve(args){
    let heights = args[0].split(' ').map(Number);
    let peaks=[];
    let sum=0;
    let j=0;
    let k=0;
    let result;

    for (var i = 1; i <= heights.length; i+=1) {
    if (heights[i-1]<heights[i] && heights[i+1]<heights[i]) {
         peaks[j]=i;
         j++;
      }
    }

    for (var i = 0; i < peaks.length; i+=1) {
         if (peaks[i]+2===peaks[i+1]) {
           sum+=heights[peaks[i]+1];
         }
        //sum+=heights[peaks[i]+1];
    }
    console.log(sum);
}

solve([ "53 20 1 30 2 40 3 10 1"])
