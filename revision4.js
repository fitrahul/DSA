// 1. fibonacci-recursion => 

/*
function recursion(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return (recursion(n-1)+recursion(n-2));
}

function runProgram(input) {
    var arr = +input;
    var cll = recursion(arr);
    console.log(cll);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`45`);
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


// 2. next greater element =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number);
        var S = [];
        var B = [];
        for (let i = N-1; i >= 0; i--) {
            if (S.length === 0) B.push(-1);
            else if (S.length > 0 && A[i] < S[S.length - 1]) B.push(S[S.length-1]);
            else if (S.length > 0 && A[i] >= S[S.length - 1]) {
                while (A[i] >= S[S.length - 1]) {
                    S.pop();
                }
                if (S.length === 0) B.push(-1);
                else B.push(S[S.length-1]);
            }
            S.push(A[i]);
        }
        console.log(B.reverse().join(" "));
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`1
    4
    1 3 2 4`);
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


// 3. Minimum in sorted & rotated array =>

/*
function binarySearch (A,l,h) {
    if (l > h) return;
    var mid = Math.floor((l+h)/2);
    if (A[l] === A[h] && A[l] === A[mid]) return console.log(A[l]);
    if (A[mid] > A[l]) l = mid;
    if (A[mid] < A[l]) h = mid;
    if (A[mid] > A[mid+1]) return console.log(A[mid+1]);
    if (A[mid-1] > A[mid]) return console.log(A[mid]);
    binarySearch(A,l,h);
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    binarySearch(A,l=0,h=N-1);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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


