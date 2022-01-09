function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    
    for (var t = 0; t < T; t++) {
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number).sort((a,b) => a - b);
        var sum = 0;
        var count = 0;
        var store = [];
        for (var i =0; i < N;i++) {
            sum += A[i];
            count++;
        }
        var mean = sum / N;
        store.push(Math.floor(mean));
        if (count % 2 == 0) {
            var median = (A[N/2] + A[(N/2)-1])/2
            store.push(median);
        }
        else {
            var median = A[Math.floor(N/2)];
            store.push(median);
        }
        var obj = {};
        for (var m = 0; m < N; m++) {
            if (obj[A[m]] === undefined) {
                obj[A[m]] = 1
            }
            else {
                obj[A[m]]++;
            }
        }
        var key = Object.keys(obj).map(Number);
        var v = Object.values(obj);
        var val = Object.values(obj).sort((a, b) => (b - a));
        var max = val[0];
        for (var p = 0; p < key.length; p++) {
            if (v[p] === max){
                store.push(key[p]);
                break;
            }
            
        }
        console.log(store.join(" "));
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    10
    4 8 7 6 4 2 4 4 1 2
    6
    4 4 4 2 2 2`);
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