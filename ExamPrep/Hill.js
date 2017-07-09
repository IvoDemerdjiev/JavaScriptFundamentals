function solve(params) {
 var s = params[0].split(' ').map(Number),
 result=0,
 peaks=[],
 j=0,
 valley,
 bestResult=0;

 for (var i = 0; i < s.length; i++) {
   if (i==0) {
     peaks[j]=i;
     j++;
   }
   if (i==s.length-1) {
     peaks[j]=i;
     j++;
   }
  else if (s[i-1]<s[i] && s[i+1]<s[i]) {
      peaks[j]=i;
      j++;
   }
 }
 while (peaks.length>1) {
     result=peaks[1]-peaks[0];
     if (result>bestResult) {
       bestResult=result;
     }
     peaks.shift();

 }
 console.log(bestResult);
}

solve(['10 1 2 3 4 5 4 3 2 1 10'])
