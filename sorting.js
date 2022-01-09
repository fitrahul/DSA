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

// *********************************************************
// *********************************************************

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

// *********************************************************
// *********************************************************

// 3. QUICK SORT =>

/*
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            // swap(items, i, j); //swap two elements
            [items[i], items[j]] = [items[j], items[i]]
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        };
        if (index < right) {
            quickSort(arr, index, right);
        };
    }
    return arr;
}


var items = [3, 5, 0, 9, 8];

let sortedArray = quickSort(items);
console.log(sortedArray);
*/

// *********************************************************
// *********************************************************

// <<<<<============  explanation of quicksort ===========>>>>>>

function partition(items, left, right) {
    console.log("items: " ,items);
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        console.log("i: ",i," j: ",j);
        while (items[i] < pivot) {
            console.log("item[i] :",items[i]," pivot: ",pivot);
            console.log("i-: ",i);
            i++;
            console.log("i+: ",i);
        }
        while (items[j] > pivot) {
            console.log("item[j] :",items[j]," pivot: ",pivot);
            console.log("j-: ",j);
            j--;
            console.log("j+: ",j);
        }
        if (i <= j) {
            // swap(items, i, j); //swap two elements
            console.log("swap1 :",items[i]," ", items[j]);
            [items[i], items[j]] = [items[j], items[i]]
            console.log("swap2 :",items[i]," ", items[j]);
            i++;
            j--;
        }
    }
    console.log("position of pivot: ", i);
    return i;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        };
        if (index < right) {
            quickSort(arr, index, right);
        };
    }
    return arr;
}


var items = [3, 5, 0, 9, 8];
// var items = [10,16,8,12,15,6,3,9,5];

let sortedArray = quickSort(items);
console.log(sortedArray);
