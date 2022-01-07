
// Encrypt It => (use of ascii value)

function runProgram(input) {
    var arr = input.trim().split('\n');
    var str = arr[0].trim();
    var K = +arr[1];
    var Change = K;
    var store = [];
    for (var i = 0; i < str.length; i++){
        var chara = str.charCodeAt(i)
        if (chara >= 65 && chara <= 90) {
            while (K >= 26) {
                K = K-26;
            }
            chara += K;
            if (chara > 90) {
                chara -= 26;
                var el = String.fromCharCode(chara);
                store.push(el);
            }
            else {
                var el = String.fromCharCode(chara);
                store.push(el);
            }
        }
        else if (chara >= 97 && chara <= 122) {
            while (K >= 26) {
                K = K-26;
            }
            chara += K;
            if (chara > 122) {
                chara -= 26;
                var el = String.fromCharCode(chara);
                store.push(el);
            }
            else {
                var el = String.fromCharCode(chara);
                store.push(el);
            }
        }
        else if (chara >= 48 && chara <= 57) {
            while (Change >= 10) {
                Change = Change-10;
            }
            chara += Change;
            if (chara > 57) {
                chara -= 10;
                var el = String.fromCharCode(chara);
                store.push(el);
            }
            else {
                var el = String.fromCharCode(chara);
                store.push(el);
            }
        }
        else store.push(str[i]);
    }
    console.log(store.join(""));
}
if (process.env.USERNAME === `hp`) {
    runProgram(`AaZz190./Usa
    27`);
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