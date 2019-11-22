/**
 * 实现链表的功能
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
a.next = b;
b.next = c;
c.next = null;

/**
 * 将链表输出
 * @param {*} root 
 */
function print(root) {
    if (!root) {
        return;
    } else {
        console.log(root);
        root = root.next;

    }
}
print(a);

/**
 * 计算链表的长度
 * @param {*} root 
 */
function countLength(root) {
    if (!root) {
        return 0;
    }
    return 1 + countLength(root.next);
}
var count = countLength(a);
console.log(count);

/**
 * 在中间节点后插入节点
 * @param {*} root 
 * @param {*} newnode 
 */
function insertAfter(root) {
    if (!root) {
        return;
    }
    var newnode = new Node("d");
    newnode.next = root.next;
    root.next = newnode;
    return root;
}
var root = insertAfter(a);
console.log(root);

/**
 * 删除节点
 * @param {*} root 
 * @param {*} value 
 */
function removeNode(root, value) {
    if (!root || !root.next) {
        return;
    }
    if (root.next.value === value) {
        root.next = root.next.next;
    } else {
        removeNode(root.next, value);
        // return root;
    }
    // 
}
var node = removeNode(a, b);
console.log(node);