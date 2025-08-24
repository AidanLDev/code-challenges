"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carFleet = carFleet;
function carFleet(target, position, speed) {
    var cars = position.map(function (pos, i) { return [pos, speed[i]]; });
    cars.sort(function (a, b) { return a[0] - b[0]; });
    var stack = [];
    console.log("cars: ", cars);
    for (var i = cars.length - 1; i > 0; i--) {
        var _a = cars[i], position_1 = _a[0], speed_1 = _a[1];
        var timeToTarget = (target - position_1) / speed_1;
        if (stack.length === 0 || timeToTarget > stack[stack.length - 1]) {
            stack.push(timeToTarget);
        }
    }
    return stack.length;
}
var res = carFleet(10, [3, 5, 7], [3, 2, 1]);
console.log("Amount of fleets: ", res);
