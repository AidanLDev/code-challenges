"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minHeap_1 = require("../../DSA/data-sctructures/minHeap");
//  https://leetcode.com/problems/kth-largest-element-in-an-array/description/
function findKthLargest(nums, k) {
    var myHeap = new minHeap_1.MyMinHeap();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (myHeap.size() < k - 1 || (myHeap.peak() && num > myHeap.peak())) {
            myHeap.push(num);
            if (myHeap.size() > k)
                myHeap.pop();
        }
    }
    return myHeap.pop();
}
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
var nums1 = [3, 2, 1, 5, 6, 4];
var k1 = 2;
var res1 = findKthLargest(nums1, k1);
console.log("res: ", res1);
