"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMinHeap = void 0;
var MyMinHeap = /** @class */ (function () {
    function MyMinHeap() {
        this.data = [];
    }
    MyMinHeap.prototype.size = function () {
        return this.data.length;
    };
    MyMinHeap.prototype.peak = function () {
        if (this.data.length < 1)
            return undefined;
        return this.data[0];
    };
    MyMinHeap.prototype.push = function (val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    };
    MyMinHeap.prototype.pop = function () {
        if (this.data.length === 0)
            return undefined;
        var top = this.data[0];
        var last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this.sinkDown(0);
        }
        return top;
    };
    MyMinHeap.prototype.bubbleUp = function (idx) {
        var data = this.data;
        while (idx > 0) {
            var parent_1 = Math.floor((idx - 1) / 2);
            if (data[parent_1] <= data[idx])
                break;
            // Swap num with it's parent
            var parentVal = data[parent_1];
            data[parent_1] = data[idx];
            data[idx] = parentVal;
            idx = parent_1;
        }
    };
    MyMinHeap.prototype.sinkDown = function (idx) {
        var data = this.data;
        var n = data.length;
        while (true) {
            var left = 2 * idx + 1;
            var right = left + 1;
            var smallest = idx;
            if (left < n && data[left] < data[smallest])
                smallest = left;
            if (right < n && data[right] < data[smallest])
                smallest = right;
            if (smallest === idx)
                break;
            var smallestNum = data[smallest];
            data[smallest] = data[idx];
            data[idx] = smallestNum;
            idx = smallest;
        }
    };
    return MyMinHeap;
}());
exports.MyMinHeap = MyMinHeap;
