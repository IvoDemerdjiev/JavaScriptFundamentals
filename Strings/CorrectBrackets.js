function solve(args) {
  var text=args[0],
      openningBracket=0,
      closeingBracket=0;
  for (var i = 0; i < text.length; i++) {
    if (text[i]==')' && openningBracket==0) {
        console.log('Incorrect');
        break;
    }
    if (text[i]=='(') {
       openningBracket++;
    }
    if (text[i]==')') {
       closeingBracket++;
    }
    if (i==text.length-1 && openningBracket===closeingBracket) {
      console.log('Correct');
    }
    if (i==text.length-1 && openningBracket!==closeingBracket) {
      console.log('Incorrect');
    }
  }
}

solve(['((a+b)/5-d)']);
