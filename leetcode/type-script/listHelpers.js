"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTestList = generateTestList;
exports.printList = printList;
function generateTestList() {
    var dummy = { val: 0, next: null };
    var tail = dummy;
    for (var i = 1; i < 6; i++) {
        tail.next = { val: i, next: null };
        tail = tail.next;
    }
    return dummy.next;
}
function printList(head) {
    var list = "";
    var cur = head;
    while (cur) {
        list += "".concat(cur.val, " -> ");
        cur = cur.next;
    }
    console.log(list);
}
