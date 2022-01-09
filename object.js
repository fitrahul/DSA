/*
// 1. 

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split("");
    var obj = {};
    for (var i = 0; i < N; i++) {
        if (obj[A[i]] === undefined) obj[A[i]] = 1;
        else obj[A[i]]++;
    }
    var key = Object.keys(obj);
    var val = Object.values(obj);
    for (var m = 0; m < key.length-1; m++) {
        for (var n = 0; n < key.length-1-m; n++) {
            if (key[n] > key[n+1]) {
                [key[n],key[n+1]] = [key[n+1],key[n]];
                [val[n],val[n+1]] = [val[n+1],val[n]];
            }
        }
    }
    for (var j = 0; j < key.length; j++){
        console.log(`${key[j]}-${val[j]}`);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`76
    gfcgqxfxkujvrkjvxeirrsvqdjcejjybwjnexvnmldrfeehotsfvnawqzmztknyywomssgdmllek`);
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

// *************************************************
*/

/*
// 2. Check duplicate => 

function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (var t = 0;t < T; t++){
        var N = +arr[line++];
        var A = arr[line++].trim().split(" ").map(Number);
        var obj = {};
        for (var i = 0; i < N; i++) {
            if (obj[A[i]] === undefined) obj[A[i]] = 1;
            else obj[A[i]]++;
        }
        var val = Object.values(obj);
        var flag = false;
        for (var j = 0; j < val.length; j++) {
            if (val[j] > 1) flag = true;
        }
        if (flag === false) console.log("NO");
        else console.log("YES");
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3
    1
    1
    2
    1 1
    3
    1 2 3`);
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

// ***********************************************

/*
// 3. Answer Queries => 

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    var q = +arr[2];
    var Q = arr[3].trim().split(" ").map(Number);
    var obj = {};
    for (var i = 0 ; i < N; i++) {
        if (obj[A[i]] === undefined) obj[A[i]] = 1;
    }
    // console.log((Object.keys(obj)).length);
    for (var j = 0 ; j < q; j++) {
        var res = obj.hasOwnProperty(Q[j]);
        if (res === true) console.log("YES");
        else console.log("NO");
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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

// ***********************************************

/*
// 4. Such Pair Returns => (by backtracking)

var flag = false;
function BR(cur,arr,new_arr,N,K) {
    if (new_arr.length === 2) {
        var sum = new_arr[0] + new_arr[1];
        if (sum === K) return flag = true;
    }
    if (cur === N) return
    for (var i = cur; i < N; i++) {
        new_arr.push(arr[i]);
        BR(i+1,arr,new_arr,N,K);
        new_arr.pop();
    }
}

function runProgram(input) {
  var arr = input.trim().split("\n");
  var T = +arr[0];
  var line = 1;
  for (var t = 0; t < T; t++) {
    var [N, K] = arr[line++].trim().split(" ").map(Number);
    var A = arr[line++].trim().split(" ").map(Number);
    var cll = BR(cur=0,A,new_arr=[],N,K);
    if (flag === true) {
        console.log("1");
        flag = false;
    }
    else console.log("-1");
  }
}
if (process.env.USERNAME === `hp`) {
  runProgram(`1
    5 2
    3 4 0 2 7`);
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

// 4.1 Such Pair Returns => (by two pointer)

/*
function runProgram(input) {
  var arr = input.trim().split("\n");
  var T = +arr[0];
  var line = 1;
  for (var t = 0; t < T; t++) {
    var [N, K] = arr[line++].trim().split(" ").map(Number);
    var A = arr[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
    var left = 0;
    var right = N-1;
    var flag = false;
    while (left < right) {
        var sum = A[left] + A[right];
        if (sum == K) {
            flag = true;
            break;
        }
        else if (sum > K) right--;
        else left++;
    }
    if (flag === true) console.log("1");
    else console.log("-1");
  }
}
if (process.env.USERNAME === `hp`) {
  runProgram(`1
    5 2
    3 4 0 2 7`);
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

// ******************************************

/*
// 5. Anagram Pairs => 


function runProgram(input) {
    var arr = input.trim().split('\n');
    var T = +arr[0];
    var line = 1;
    for (var t = 0; t < T; t++) {
        var N = +arr[line++];
        var k = line;
        var store = [];
        for (var i = line; i < N+k; i++) {
            var str = (arr[line++].trim().split("").sort()).join("");
            store.push(str)
        }
        var count = 0;
        var obj = {};
        for (var j = 0; j < N; j++) {
            if (obj[store[j]] === undefined) obj[store[j]] = 1;
            else {
                var res = obj[store[j]];
                // console.log(res);
                if (res >= 1) count += res;
                obj[store[j]]++;
            }
        }
        console.log(count);
    }
}
if (process.env.USERNAME === `hp`) {
    runProgram(`2
    5
    aaaaabbbbb
    baabbbbaaa
    aaaabbbbba
    xxxxxxxxxy
    yxxxxxxxxx
    2
    abcdefghij
    jighdefabc
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



// 6. subarray or substring by recursion =>

var str = "abcdefg"
function SR(str,cur=0) {
    for (var i = cur; i <= str.length; i++) {
        if (i == str.length && str.length !=1) {
            SR(str = str.substring(cur+1),cur);
        }
        else if (str.length == 1) {
            return console.log(str[0]);
        }
        else{
            console.log(str.substring(cur,i+1));
        }
    }
}
SR(str);
