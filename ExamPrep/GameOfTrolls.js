function GameOfTrolls(args) {
    let
        matrix = args[0].split(' ').map(Number),
        rows = matrix[0],
        cols = matrix[1],
        start = args[1].split(';').map(String),
        bou = start[0].split(' ').map(Number),
        bub = start[1].split(' ').map(Number),
        tuj = start[2].split(' ').map(Number),
        inside = true,
        sum = 0,
        arr = [],
        i = 0,
        moves = args.slice(2);
        function matrixCreate( rows, cols, defaultValue){

          var arr = [];

          // Creates all lines:
          for(var i=0; i < rows; i++){

              // Creates an empty line
              arr.push([]);

              // Adds cols to the empty line:
              arr[i].push( new Array(cols));

              for(var j=0; j < cols; j++){
                // Initializes:
                arr[i][j] = defaultValue;
              }
          }

        return arr;
        }

        tempMatrix = matrixCreate(rows, cols, "empty");
        while (inside == true) {
           tempMatrix[tuj[0]][tuj[1]]="Princes";
           tempMatrix[bou[0]][bou[1]]="Wboup";
           tempMatrix[bub[0]][bub[1]]="Nbslbub";
           if ((bou[0]+1==tuj[0] && tuj[1]==bou[1]) ||
         (bou[0]-1==tuj[0] && tuj[1]==bou[1]) ||
       (bou[0]==tuj[0] && tuj[1]==bou[1]+1) ||
     (bou[0]==tuj[0] && tuj[1]==bou[1]-1)) {
             console.log("The trolls caught Lsjtujzbo at {0} {1}",tuj[0],tuj[1]);
             //console.log(`The trolls caught Lsjtujzbo at ${tuj[0]} ${tuj[1]}`);
             break;
           }
           if ((bub[0]+1==tuj[0] && tuj[1]==bub[1]) ||
         (bub[0]-1==tuj[0] && tuj[1]==bub[1]) ||
       (bub[0]==tuj[0] && tuj[1]==bub[1]+1) ||
     (bub[0]==tuj[0] && tuj[1]==bub[1]-1)) {
       let busted1=tuj[0];
       let busted2=tuj[1];
             console.log("The trolls caught Lsjtujzbo at",busted1,busted2);
             break;
           }
                arr = moves[i].split(' ').map(String);
            if (arr[0] === 'mv') {
                if (arr[1] === "Lsjtujzbo") {
                  if (tempMatrix[tuj[0]][tuj[1]]!='trap') {
                      tempMatrix[tuj[0]][tuj[1]]='empty';
                  }
                    switch (arr[2]) {
                        case "d":
                        if (tuj[0]+1<rows) {
                            tuj[0]=tuj[0]+1;
                        }
                            break;
                        case "u":
                           if (tuj[0]-1>-1) {
                             tuj[0]=tuj[0]-1;
                           }
                            break;
                        case "l":
                        if (tuj[1]-1>-1) {
                          tuj[1]=tuj[1]-1;
                        }
                            break;
                        default:
                        if (tuj[1]+1<cols) {
                          tuj[1]=tuj[1]+1;
                        }
                            break;
                    }
                }
                if (arr[1] === "Wboup") {
                  tempMatrix[bou[0]][bou[1]]='empty'
                    switch (arr[2]) {
                        case "d":
                        if (bou[0]+1<rows) {
                          bou[0]=bou[0]+1;
                        }
                            break;
                        case "u":
                        if (bou[0]-1>-1) {
                          bou[0]=bou[0]-1;
                        }
                            break;
                        case "l":
                        if (bou[1]-1>-1) {
                            bou[1]=bou[1]-1;
                        }
                            break;
                        default:
                          if (bou[1]+1<cols) {
                            bou[1]=bou[1]+1;
                          }
                            break;
                    }
                }
                if (arr[1] === "Nbslbub") {
                   tempMatrix[bub[0]][bub[1]]="empty";
                    switch (arr[2]) {
                        case "d":
                        if (bub[0]+1<rows) {
                          bub[0]=bub[0]+1;
                        }
                            break;
                        case "u":
                        if (bub[0]-1>-1) {
                          bub[0]=bub[0]-1;
                        }
                            break;
                        case "l":
                        if (bub[1]-1>-1) {
                          bub[1]=bub[1]-1;
                        }
                            break;
                        default:
                        if (bub[1]+1<cols) {
                            bub[1]=bub[1]+1;
                        }
                            break;
                    }
                }
            } else if (arr[0] === 'lay') {
                tempMatrix[tuj[0]][tuj[1]]="trap";
            }
            i++;
            if (i > moves.length) {
                inside = false;
            }
        }
    }
GameOfTrolls([
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]);
