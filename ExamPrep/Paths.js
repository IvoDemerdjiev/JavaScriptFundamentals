function solve(args) {
  var key,
    lab = args.slice(1).map(function(line) {
      return line.split(' ');
    }),
    directions = {
      d: +1,
      u: -1,
      l: -1,
      r: +1
    },
    visited = {},
    row, col, sum;

  function getValueAt(row, col) {
    return (1 << row) + col;
  }

  row = 0;
  col = 0;
  sum = 0;
  while (true) {
    if (!lab[row] || !lab[row][col]) {
      return 'successed with ' + sum;
    }
    key = row + ';' + col;
    if (visited[key]) {
      return 'failed at (' + row + ', ' + col + ')';
    }

    visited[key] = true;
    sum += getValueAt(row, col);
    var dir = lab[row][col];
    row += directions[dir[0]];
    col += directions[dir[1]];
  }
}
console.log(solve(['2 55',
'dr ur dr dr dr dr ur ur dr dr ur dl dr dr ur dr dl dr ur ur ul dr dl dr ul dr dl dr ur dl ur dr ur ul dl dr ur ur ul ul ul dr dr dl dl dr ul dl ul dl dl dl ur ul ul',
'ur ur dl ul dl ur dr dr dr ul dr ur ur dr dr dl ur ur dl dl ur dl dr ur ur ul dr ul ur dl ur dl dl dr ul ul ur dl ul ur ur dr dl ur ul dl dr ul ul dl ul ur ul dl dr'
]));
