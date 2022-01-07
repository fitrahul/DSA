// 1. Bubble sort => 
/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    for (let i = 0; i < N-1; i++) {
        for (let j = 0; j < N-1-i; j++) {
            if (A[j] > A[j+1]) {
                [A[j],A[j+1]] = [A[j+1],A[j]];
            }
        }
    }
    console.log(A.join(" "));
}
if (process.env.USERNAME === `hp`) {
    runProgram(`5
    3 5 0 9 8`);
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

// *****************************************

// 2. selection sort => 

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    for (let i = 0; i < N; i++) {
        var m_i = i;
        for (let j = i+1; j < N; j++) {
            if (A[j] < A[m_i]) {
                m_i = j;
            }
        }
        [A[i],A[m_i]] = [A[m_i],A[i]];
    }
    console.log(A.join(" "));
}
if (process.env.USERNAME === `hp`) {
    runProgram(`5
    3 5 0 9 8`);
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

// 3. quick sort =>

function quickSort(A, left, right) {
    if (arr.length > 1) {
        var 
    }
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    if (N === 1) console.log(A[0]);
    else {
        var cll = quickSort(A, left = 0, right = N-1);
        console.log(cll);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`5
    3 5 0 9 8`);
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