// 1. Sum of subarray =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (var t = 0; t < T; t++) {
        var [N,K] = arr[line++].trim().split(" ").map(Number);
        var A = arr[line++].trim().split(" ").map(Number);
        var ws = 0;
        var high = 0;
        var flag = false;
        for (var low = 0; low < N; low++) {
            while (high < N && ws < K) {
                ws += A[high++];
            }
            if (ws === K) {
                flag = true;
                break;
            }
            else ws -= A[low];
        }
        if (flag) console.log("Yes");
        else console.log("No");
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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



// 2. Two sorted array =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A1 = arr[line++].trim().split(" ").map(Number);
        var A2 = arr[line++].trim().split(" ").map(Number);
        var l = 0;
        var r = N-1;
        var count = 0;
        while (l < N && r >= 0) {
            if (A1[l] === A2[r]) {
                count++;
                l++
                r--
            }
            else if (A2[r] < A1[l]) {
                r--;
            }
            else {
                l++;
            }
        }
        console.log(count);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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



// 3. Substrings with K distinct letters =>

/*
function check(ws) {
    let obj = {};
    for (let j = 0; j < ws.length; j++) {
        if (obj[ws[j]] === undefined) obj[ws[j]] = 1;
        else obj[ws[j]]++
    }
    var val = Object.values(obj);
    var flag = false;
    for (let k = 0; k < val.length; k++) {
        if (val[k] > 1) flag = true;
    }
    if (flag) return false // chara repeated
    else return true; //chara are distinct
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var [N, K] = arr[0].trim().split(" ").map(Number);
    var A = arr[1].trim().split("");
    var ws = "";
    var low = 1;
    var high = 0;
    var sum = 0;
    while (high < K) {
        ws += A[high++];
    }
    var cll = check(ws);
    if (cll) sum++;
    while (high < N) {
        ws += A[high++];
        ws = ws.substring(low);
            var cll2 = check(ws);
            if (cll2) sum++;
    }
    console.log(sum);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`11 3
    aabcdabbcdc`);
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




// 3.Gifts => 

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number);
        var obj = {};
        for (let i = 0; i < N; i++) {
            if (obj[A[i]] === undefined) obj[A[i]] = 1;
        }
        var val = Object.keys(obj);
        console.log(val.length);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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


