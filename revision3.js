// 1. All Twice Except One =>
/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1; 
    for (let t = 0; t < T; t++) {
        const N = +arr[line++];
        const A = arr[line++].trim().split(" ").map(Number);
        var obj = {};
        for (let i = 0; i < N; i++) {
            if (obj[A[i]] === undefined) obj[A[i]] = 1;
            else delete obj[A[i]];
        }
        console.log((Object.keys(obj)).join(""));
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
*/






// 2. Alex and his OCD =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1; 
    for (let t = 0; t < T; t++) {
        const N = +arr[line++];
        const A = arr[line++].trim().split(" ").map(Number);
        var count = 0;
        for (let i = 0; i < N; i++) {
            for (let j = i+1; j < N; j++) {
                if ((A[i] + A[j]) % 60 === 0) count++;
            }
        }
        console.log(count);
    }

}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    3
    60 60 60
    5
    30 30 10 20 400`);
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
*/






// 3. Nikhil and his Search =>
/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    var Q = +arr[2];
    for (let t = 3; t < Q+3; t++) {
        var x = arr[t].trim().split(" ").map(Number);
        var count = 0;
        if (x[0] === 0) {
            for (let i = 0; i < N; i++) {
                if (A[i] >= x[1]) count++;
            }   
        }
        else {
            for (let i = 0; i < N; i++) {
                if (A[i] > x[1]) count++;
            }
        }
        console.log(count);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
*/







// 4. Detect Palindrome II =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split("");
        var obj = {};
        for (let i = 0; i < N; i++) {
            if (obj[A[i]] === undefined) obj[A[i]] = 1;
            else obj[A[i]]++;
        }
        var val = Object.values(obj);
        var count = 0;
        for (let j = 0; j < val.length; j++) {
            if (val[j] % 2 !== 0) count++;
        }
        if (count > 1) console.log("Not Possible!");
        else console.log("Possible");
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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
*/


