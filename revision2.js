// 1. staircase =>
/*

function f(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    return (f(n - 1) + f(n - 2) + f(n - 3))
}

function runProgram(input) {
    var arr = +input;
    var res = f(arr);
    console.log(res);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`35`);
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


// 2. The Peak Point =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number);
        for (let i = 0; i < N; i++) {
            if (A[i+1] < A[i]) {
                console.log(i);
                break;
            }
        }
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    3
    10 20 11
    5
    1 3 6 5 4`);
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


// 3.Take out maximum =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var [N,K] = arr[0].trim().split(" ").map(Number);
    var A = arr[1].trim().split(" ").map(Number);
    var l = 0, r = 0;
    var ms = 0;
    var ws = 0;
    while (r < K) {
        ws += A[r++];
        if (ms < ws) ms = ws;
    }
    while (r < N) {
        ws = ws + A[r++] - A[l++];
        if (ms < ws) ms = ws;
    }
    console.log(ms);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`100 5
    56 96 57 87 65 82 2 74 60 81 66 84 89 28 78 62 100 58 96 29 41 43 92 37 38 38 58 81 64 -8 9 13 16 16 54 37 32 5 84 -1 30 91 24 31 85 71 13 3 56 49 91 74 28 8 85 81 78 13 69 89 72 33 99 14 71 84 26 89 3 70 33 75 88 93 12 96 35 15 6 25 74 -4 11 68 73 59 41 16 26 42 84 81 34 50 8 -4 16 20 71 23`);
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

// 4. Odd subset => (sum is odd)

/*
var count = 0;
function BT(N,A,new_arr,cur){
    if (new_arr.length > 0) {
        var sum = 0;
        for (let s = 0; s < new_arr.length; s++) {
            sum += new_arr[s];
        }
        if (sum % 2 !== 0) count++;
    }
    if (cur === N) return;
    for (let i = cur; i < N; i++) {
        new_arr.push(A[i]);
        BT(N,A,new_arr,i+1);
        new_arr.pop();
    }
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    BT(N,A,new_arr=[],cur = 0);
    console.log(count);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    2 4`);
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