function minimumTotal(triangle) {
    if (triangle.length === 1)
        return Math.min.apply(Math, triangle[0]);
    for (var row = 1; row < triangle.length; row++) {
        for (var column = 0; column < triangle[row].length; column++) {
            var num = triangle[row][column];
            if (column === 0) {
                triangle[row][column] = num + triangle[row - 1][0];
                continue;
            }
            if (column === triangle[row].length - 1) {
                console.log("last row, grab the right most number form the above row: ", triangle[row - 1][triangle[row - 1].length - 1]);
                triangle[row][column] =
                    num + triangle[row - 1][triangle[row - 1].length - 1];
                continue;
            }
            // Middle values can take from two indexes, above and above right
            triangle[row][column] = Math.min(num + triangle[row - 1][column - 1], num + triangle[row - 1][column]);
        }
        console.log("Row values are now: ", triangle[row]);
    }
    console.log("last row of the triangle is: ", triangle[triangle.length - 1]);
    return Math.min.apply(Math, triangle[triangle.length - 1]);
}
var triangle1 = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
var res = minimumTotal(triangle1);
console.log("outputs ".concat(res));
