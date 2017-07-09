function solve(args) {
    Array.prototype.remove = function(re) {
        var i,
            len;

        for (i = 0, len = this.length; i < len; i += 1) {
            if (this[i] === re) {
                this.splice(i, 1);
                i--;
            }
        }
    };
    args.remove(args[0]);
    console.log(args.join('\n'));
}

solve(['_h/_',
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
]);
