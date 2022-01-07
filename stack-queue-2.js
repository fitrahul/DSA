// 1. Buy ticket =>

/*

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var Q = [];
    for (let i = 1; i <= N; i++) {
        var A = arr[i].trim().split(" ");
        if (A[0] === "E") {
            Q.unshift(A[1]);
            console.log(Q.length);
        }
        else {
            if (Q.length === 0) console.log(`-1 0`);
            else {
                var last_el = Q.pop();
                var Q_length = Q.length;
                console.log(`${last_el} ${Q_length}`);
            }
        }
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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


// 2. List and Queue =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var Q = [];
    for (let i = 1; i <= N; i++) {
        var A = arr[i].trim().split(" ");
        if (A[0] === "E") Q.unshift(A[1]);
        else {
            if (Q.length) {
                var last_el = Q.pop();
                console.log(last_el);
            }
            else {
                console.log("Empty");
            }
        }
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`5
    E 2
    E 3
    D
    D
    D`);
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


// 3. List and Queue 2 =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var Q = [];
    for (let i = 1; i <= N; i++) {
        var A = arr[i].trim().split(" ");
        if (A[0] === "Push") Q.push(A[1]);
        else {
            if (Q.length) {
                var last_el = Q.pop();
                console.log(last_el);
            }
            else {
                console.log("Empty");
            }
        }
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3
    Push 4
    Push 5
    Pop`);
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


// 4. Tallest Around =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = arr[0];
    var line = 1;
    for (let t = 0; t < T; t++){
        var [N,K] = arr[line++].trim().split(" ").map(Number);
        var A = arr[line++].trim().split(" ").map(Number);
        var Store = [];
        for (let i = 0; i <= N-K; i++) {
            var res = [];
            for (let j = i+0; j < K+i; j++){
                res.push(A[j]);
            }
            var max = Math.max(...res);
            Store.push(max);
        }
        console.log(Store.join(" "));
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`1
    9 3
    1 2 3 1 4 5 2 3 6`);
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

// 5. Nearest Smaller Element =>

/*
function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let t = 0; t < T; t++) {
        var N = arr[line++].trim().split(" ").map(Number);
        var A = arr[line++].trim().split(" ").map(Number);
        var store = [];
        if (N === 1) console.log(-1);
        else {
            for (let i = 0; i < N; i++) {
                if (i === 0) {
                    let f = false;
                    for (let j = 0; j < N; j++) {
                        if (A[j] < A[0]) {
                            f = false;
                            store.push(A[j]);
                            break;
                        }
                        else f = true;
                    }
                    if (f) store.push(-1);
                }
                else if (i > 0 && i !== N - 1) {
                    // right side
                    var r = [];
                    let h = false
                    for (let k = i + 1; k < N; k++) {
                        if (A[k] < A[i]) {
                            h = false;
                            r.push(A[k], k);
                            break;
                        }
                        else h = true;
                    }
                    if (h) r.push(-1);

                    // left side
                    var l = [];
                    let g = false
                    for (let k = i - 1; k >= 0; k--) {
                        if (A[k] < A[i]) {
                            g = false;
                            l.push(A[k], k);
                            break;
                        }
                        else g = true;
                    }
                    if (g) l.push(-1);

                    // compare left && right
                    if (r.length === 2 && l.length === 2) {
                        let r_abs = Math.abs(i - r[1]);
                        let l_abs = Math.abs(i - l[1]);
                        if (r_abs === l_abs) store.push(l[0])
                        else {
                            let min = Math.min(l_abs, r_abs);
                            if (min === r_abs) store.push(r[0])
                            else store.push(l[0])
                        }
                    }
                    else if (r.length === 1 && l.length === 1) store.push(-1)
                    else if (r.length === 2 && l.length === 1) store.push(r[0])
                    else if (r.length === 1 && l.length === 2) store.push(l[0])
                }
                else if (i === N - 1) {
                    let f = false;
                    for (let j = N - 2; j >= 0; j--) {
                        if (A[j] < A[N - 1]) {
                            f = false;
                            store.push(A[j]);
                            break;
                        }
                        else f = true;
                    }
                    if (f) store.push(-1);
                }
            }
        }
        console.log(store.join(" "));
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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