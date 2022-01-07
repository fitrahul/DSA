// 1. Search in O(logn) =>

/*
function BSR(A,l,h,K) {
    if (l > h) return console.log("-1");;
    var mid = Math.floor((l+h) /2);
    if (A[mid] === K) return console.log(mid);
    else if (A[mid] > K) h = mid - 1;
    else l = mid + 1;
    BSR(A,l,h,K);
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    var K = +arr[2];
    BSR(A,l=0,h=N-1,K);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`5
    1 2 3 5 6
    4`);
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


// 2. Number of Occurences in logn =>

/*
var higher_index = 0;
function BSRH(A,K,l,h) {
    if (l > h) return;
    let mid = Math.floor((l+h)/2);
    // console.log("mid: ",mid);
    if (A[mid] === K) {
        higher_index = mid;
        l = mid+1;
    }
    else if (A[mid] > K) h = mid - 1;
    else l = mid + 1;
    BSRH(A,K,l,h);
}

var lower_index = 0;
function BSRL(A,K,l,h) {
    if (l > h) return;
    let mid = Math.floor((l+h)/2);
    if (A[mid] === K) {
        lower_index = mid;
        h = mid - 1;
    }
    else if (A[mid] > K) h = mid - 1;
    else l = mid + 1;
    BSRL(A,K,l,h);
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var [N,K] = arr[0].trim().split(" ").map(Number);
    var A = arr[1].trim().split(" ").map(Number);
    BSRH(A,K,l=0,h=N-1);
    BSRL(A,K,l=0,h=N-1);
    console.log(higher_index-lower_index+1);
    // console.log(higher_index);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`6 6
    2 3 3 3 6 9`);
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

// 3. Life of a CTO =>

/*
var lower_index = -1;
function BSRL(A,K,l,h) {
    if (l > h) return;
    let mid = Math.floor((l+h)/2);
    if (A[mid] === K) {
        lower_index = mid;
        h = mid - 1;
    }
    else if (A[mid] > K) h = mid - 1;
    else l = mid + 1;
    BSRL(A,K,l,h);
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    BSRL(A,K=1,l=0,h=N-1);
    if (lower_index >= 0) console.log(lower_index);
    else  console.log("-1");
}
if (process.env.USERNAME === `hp`) {
    runProgram(`5
    0 0 0 0 0`);
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


function runProgram(input) {
    var arr = input.trim().split('\n');
    var [N,M] = arr[0].trim().split(" ").map(Number);
    var P = arr[1].trim().split(" ").map(Number);
    var sum = 0;
    for (let i = 0; i < N; i++) {
        sum += P[i];
    }
    var res = Math.floor(sum/M)
    console.log(res);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`52 17
    9542 10181 11764 26836 11414 11803 1374 26005 26268 17266 32353 17841 533 26079 16336 29061 28539 1864 27142 26058 24371 25289 9922 21527 28680 16727 27446 11431 8664 29091 8282 30045 24717 30529 9606 4613 15183 13578 24896 25053 7161 5823 21587 22100 4809 32239 25377 26385 2651 30234 18745 1847`);
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