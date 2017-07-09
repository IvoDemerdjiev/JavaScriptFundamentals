function solve(args) {
    var people = [],
        step = 3,
        input = args,
       firstName="",
       lastName="",
       youngest=Number.MAX_VALUE,
       age=0,
    i;
    for(var i = 2; i < input.length; i += 3) {
         firstName = input[i-2];
         lastName = input[i-1];
         age = input[i]
        if (youngest>age) {
           youngest=age;
           youngestFirstName=firstName;
           youngestLastName=lastName;
        }
    }
    console.log(youngestFirstName + " " + youngestLastName);
}

solve([
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]);
