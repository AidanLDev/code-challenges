"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reOrder = reOrder;
var listHelpers_1 = require("./listHelpers");
function reOrder(head) {
    if (!head || !head.next)
        return;
    // find the middle
    var slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse the second half
    var prev = null;
    var cur = slow.next;
    while (cur) {
        var nextTemp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextTemp;
    }
    slow.next = null;
    // merge the two halves
    var first = head, second = prev;
    while (second) {
        var temp1 = first.next;
        var temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
}
var testList = (0, listHelpers_1.generateTestList)();
console.log("testList: ");
(0, listHelpers_1.printList)(testList);
console.log("After reorder:");
reOrder(testList);
(0, listHelpers_1.printList)(testList);
