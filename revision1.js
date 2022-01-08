// 1. Weighted Sum =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number);
        var num = 0;
        for (let i = 1; i <= N; i++) {
            num = (A[i-1] * i) + num;
        }
        console.log(num);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
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


// 2. Is it Triangle ? =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    for (let t = 1; t <= T; t++) {
        var A = arr[t].trim().split(" ").map(Number);
        // console.log(A[0], A[1], A[2]);
        if (((A[0] + A[1]) > A[2]) && ((A[0] + A[2]) > A[1]) && ((A[1] + A[2]) > A[0])) {
            console.log("Yes");
        }
        else {
            console.log("No");
        }
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
    `);
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


// 3. Good Pairs =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number);
        var count = 0;
        for(let i = 0; i < N; i++) {
            var rhs = 2*A[i];
            for (let j = 0; j < N; j++) {
                if (j !== i && A[j] === rhs) {
                    count++;
                }
            }
        }
        console.log(count);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1 `);
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


// 4. Longest Increasing Subarray =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number);
        var l = 0;
        let count = 0;
        while(l<N){
            let r = l+1;
            while (r<N) {
                if (A[r]>A[r-1]) r++;
                else break;
            }
            let r_l = r-l;
            if (count < r_l) count = r_l;
            l++;
        }
        console.log(count);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`1
    79
17 55 61 9 89 29 72 23 81 17 77 74 72 60 70 4 83 94 97 25 42 5 42 62 44 83 64 33 60 21 64 76 75 24 85 16 4 56 38 85 24 14 58 47 26 79 3 8 72 99 84 13 3 25 26 98 59 89 31 70 61 94 46 88 69 82 55 24 89 92 8 65 57 17 11 82 48 13 41`);
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

// 5. National Award Ceremony =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
        console.log(A.join(" "));
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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


// 6. Man of the Match => 

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var O = +arr[line++];
        var R = arr[line++].trim().split(" ").map(Number);
        var a = 0;
        var v = 0;
        var flag = true;
        for (let i = 0; i < R.length; i++) {
            if (flag) {
                if (i % 6 === 0 && i !== 0) {
                    flag = false;
                    v = v + R[i];
                    if (R[i] === 1 || R[i] === 3) flag = true;
                }
                else {
                    // flag = true
                    a = a + R[i];
                    if (R[i] === 1 || R[i] === 3) flag = false;
                }
            }
            else {
                if (i % 6 === 0 && i !== 0) {
                    flag = true;
                    a = a + R[i];
                    if (R[i] === 1 || R[i] === 3) flag = false;
                }
                else {
                    // flag = false
                    v = v + R[i];
                    if (R[i] === 1 || R[i] === 3) flag = true;
                }
            }
        }
        if (a === v) console.log("Tie");
        else if (a > v) console.log("AB de Villiers");
        else console.log("Virat Kohli");
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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


// 7. Lifeboats =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var [N,W] = arr[line++].trim().split(" ").map(Number);
        var A = arr[line++].trim().split(" ").map(Number).sort((a,b) => a-b);
        var [l,r] = [0,N-1];
        var count = 0;
        while (A[r] >= W) {
            r--;
            count++;
        }
        while (l <= r) {
            if ((A[l]+A[r]) <= W) {
                count++;
                l++;
                r--;
            }
            else {
                count++;
                r--;
            }
        }
        console.log(count);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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


// 8. Detective L =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let q = 0; q < T; q++) {
        var [row,col] = arr[line++].trim().split(" ").map(Number);
        // 1. make matrix
        var mat = [];
        for (let m = 0; m < row; m++) {
            var A = arr[line++].trim().split(" ").map(Number);
            mat.push(A);
        }

        // 2. work on matrix
        var store = [];
        var [t,b,l,r] = [0,row-1,0,col-1];
        while(l < col) {
            for (let i = t; i <= b; i++) {
                store.push(mat[i][l]);
            } 
            l++;
            for (let i = l; i <= r; i++) {
                store.push(mat[b][i]);
            }
            b--;
        }
        console.log(store.join(" "));
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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