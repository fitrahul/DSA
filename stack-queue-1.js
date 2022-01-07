/*

// 1. Next greater =>

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
            else if (S.length > 0 && A[i] < S[S.length-1]) B.push(S[S.length-1]);
            else if (S.length > 0 && A[i] >= S[S.length-1]) {
                while (S.length > 0 && A[i] >= S[S.length-1]) {
                    S.pop();
                }
                if (S.length === 0) B.push(-1);
                else B.push(S[S.length-1]);
            }
            S.push(A[i]);
        }
        console.log((B.reverse()).join(" "));
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

// 2. Alan & Christopher => 

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    for (let t = 1; t <= T; t++) {
        var S = arr[t].trim().split("");
        var store = [];
        for (let i = 0; i < S.length; i++) {
            if (S[i] === "#") store.pop();
            else store.push(S[i]);
        }
        console.log(store.join(""));
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    ab#d
    a#bc`);
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



// 3. Strings with Parenthesis => 
/*
function bracket(A) {
    if (A.length % 2 != 0) {
        return console.log("Not Balanced");
    }
    else {
        var store = [];
        for (let s = 0; s < A.length; s++) {
            if (store[store.length - 1] === "[" && A[s] === "]" || store[store.length - 1] === "{" && A[s] === "}" || store[store.length - 1] === "(" && A[s] === ")") {
                store.pop();
            }
            else {
                store.push(A[s]);
            }
        }
        if (store.length > 0) {
            console.log("Not Balanced");
        }
        else {
            console.log("Balanced");
        }
    }
}

function runProgram(input) {
    var arr = input.trim().split('');
    bracket(arr);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`(((((((((())))))))))`);
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



/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split("");
        var obj = {};
        for (var i = 0; i < N; i++) {
            if (obj[A[i]] === undefined) obj[A[i]] = 1;
            else obj[A[i]]++;
        }
        var val = Object.values(obj);
        // console.log(val);
        var count = 0;
        for (let j = 0; j < val.length; j++) {
            if (val[j] % 2 != 0) count++;
        }
        if (count > 1) console.log("Not Possible!");
        else console.log("Possible!");
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


// Use Side Lane => 


function runProgram(input) {
    var arr = input.trim().split('\n');
    var line = 0;
    var check = true;
    while (check) {
        var N = +arr[line++];
        if (N === 0) return check = false;
        var A = arr[line++].trim().split(" ").map(Number);
        var store = [1];
        var stack = [];
        for (let i = 0; i < N; i++) {
            if (A[i] === store[store.length-1]+1) store.push(A[i]);
            else if (A[i] !== store[store.length-1]+1 && A[i]!= 1) stack.push(A[i]);
        }
        stack.reverse();
        for (let j = 0; j < stack.length; j++) {
            if (stack[j] === store[store.length-1]+1) store.push(stack[j]);
        }
        if (store.length === N) console.log("yes");
        else console.log("no");
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`
    5 
    3 1 2 5 4
    0`);
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