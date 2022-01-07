// 1. Insert a node at the Head =>

/*
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    var new_node = new LinkedListNode(data);
    if (!head) return new_node;
    else {
        let current = head;
        new_node.next = current;
        return new_node;
    }
}

*/

// *******************************************
// *******************************************

// 2. Insert a node at the Tail =>

/*

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    var new_node = new LinkedListNode(data);
    var current = head;
    if (!head) return new_node;
    else {
        while(current.next) {
            current = current.next;
        }
        current.next = new_node;
        return head;
    }
}

*/

// *******************************************
// *******************************************

// 3. Delete node without head =>

/*
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
    var current = node;
    current.data = current.next.data;
    current.next = current.next.next;
}
*/

// *******************************************
// *******************************************

// 4. Middle Node =>

/*
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    var count = 0;
    var cur = head;
    while (cur) {
        count++;
        cur = cur.next;
    }
    cur = head;
    if (count % 2 !== 0) {
        let res = Math.ceil(count/2);
        let i = 1;
        while (i < res) {
            cur = cur.next;
            i++;
        }
        return cur.data;
    }
    else {
        let res = count/2;
        let i = 0;
        while (i < res) {
            cur = cur.next;
            i++;
        }
        return cur.data;
    }
};

*/

// *******************************************
// *******************************************

// 5. Reverse the Linked List =>

/*

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    var c = head;
    var p,n;
    while (c) {
        n = c.next;
        c.next = p;
        p = c;
        c = n;
    }
    return p;
}

*/

// *******************************************
// *******************************************

// 6. Palindrome List =>

/*
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    var cur = head;
    var stack = [];
    while (cur) {
        stack.push(cur.data);
        cur = cur.next;
    }
    cur = head;
    var flag = true;
    var i = stack.length-1;
    while(cur) {
        if (cur.data !== stack[i--]) flag = false;
        cur = cur.next;
    }
    if (flag) return true;
    else return false;
}

*/

// *******************************************
// *******************************************

// 7. Dr. Strange and Possibilities =>

/*
function backtracking(arr,new_arr,cur) {
    if (new_arr.length > 0) console.log(new_arr.join(" "));
    if (cur === arr.length) return;
    for (let j = cur; j < arr.length; j++) {
        new_arr.push(arr[j]);
        backtracking(arr,new_arr,j+1);
        new_arr.pop();
    }
}

function runProgram(input) {
    var arr = input.trim().split("").map(Number);
    var s = [];
    for (let i = 1; i <= arr; i++) {
        s.push(i);
    }
    backtracking(s,new_arr=[],cur=0)
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3`);
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

// *******************************************
// *******************************************

// 8. Generate Permutations =>

/*
function permutation(arr,cur) {
    if (cur === arr.length) return console.log(arr);
    for (let i = cur; i < arr.length; i++) {
        [arr[i],arr[cur]] = [arr[cur],arr[i]];
        permutation(arr,cur+1);
        [arr[i],arr[cur]] = [arr[cur],arr[i]];
    }
}

function runProgram(input) {
    var arr = input.trim().split('\n');
    var N = +arr[0];
    var A = arr[1].trim().split(" ").map(Number);
    permutation(A,cur = 0);
}
if (process.env.USERNAME === `hp`) {
    runProgram(`3
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

// *******************************************
// *******************************************

// 9. Merge two Linked Lists =>

/*
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    var s1 = [];
    var c1 = l1;
    while(c1) {
        s1.push(c1.val);
        c1 = c1.next;
    }
    var c2 = l2;
    while(c2) {
        s1.push(c2.val);
        c2 = c2.next;
    }
    s1.sort((a,b) => a- b);
    var list = new ListNode(s1[0]);
    var cur = list;
    var i = 1;
    while (i < s1.length) {
        var new_node = new ListNode(s1[i++]);
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = new_node;
    }
    return list;
};

*/

// *******************************************
// *******************************************

// 10. 