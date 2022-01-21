function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (let q = 0; q < T; q++) {
        var [m, n] = arr[line++].trim().split(" ").map(Number);
        var mat = [];
        for (let i = 0; i < m; i++) {
            var A = arr[line++].trim().split(" ").map(Number);
            mat.push(A);
        }
        var count = 0;
        var store = [];
        var l = 0, r = n - 1, t = 0, b = m - 1;
        while (count !== m*n) {
            for (let j = t; j <= b && count <= m*n; j++) {
                store.push(mat[j][l]);
                count++;
            }
            l++;
            for (let j = l; j <= r && count <= m*n; j++) {
                store.push(mat[b][j]);
                count++;
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
4 2
1 2
4 5
7 8
10 11`);
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