"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carFleet = carFleet;
function carFleet(target, position, speed) {
    var fleets = 0;
    var cars = position.map(function (pos, i) { return [pos, speed[i]]; });
    cars.sort(function (a, b) { return a[0] - b[0]; });
    console.log("cars: ", cars);
    return fleets;
}
carFleet(10, [3, 5, 7], [3, 2, 1]);
