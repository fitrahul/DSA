function GCDR(a,b) {
    if (a === b) return console.log(a);
    else if (a === 1 || b === 1) return console.log(1);
    else if (a > b) {
        a -= b;
        if (a === b) {
            return console.log(a);;
        }
        else {
            GCDR(a,b);
        }
    }
    else {
        b -= a;
        if (a === b) {
            return console.log(a);;
        }
        else {
            GCDR(a,b);
        }
    }
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var  T = +arr[0];
    for (let t = 1; t <= T; t++) {
        var [a,b] = arr[t].trim().split(" ").map(Number);
        var cll = GCDR(a,b);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3
    2 25
    6 9
    999999999 999999998`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding(`ascii`);
    let read = ``;
    process.stdin.on(`data`, function (input) {
        read += input;
    });
    process.stdin.on(`end`, function () {
        read = read.replace(/\n$/, ``);
        read = read.replace(/\n$/, ``);
        runProgram(read);
    });
    process.on(`SIGINT`, function () {
        read = read.replace(/\n$/, ``);
        runProgram(read);
        process.exit(0);
    });
}
