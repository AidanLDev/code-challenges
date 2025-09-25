function minimumTotal(triangle: number[][]): number {
  if (triangle.length === 1) return Math.min(...triangle[0]);
  for (let row = 1; row < triangle.length; row++) {
    for (let column = 0; column < triangle[row].length; column++) {
      const num = triangle[row][column];
      if (column === 0) {
        triangle[row][column] = num + triangle[row - 1][0];
        continue;
      }
      if (column === triangle[row].length - 1) {
        triangle[row][column] =
          num + triangle[row - 1][triangle[row - 1].length - 1];
        continue;
      }
      // Middle values can take from two indexes, above and above right
      triangle[row][column] = Math.min(
        num + triangle[row - 1][column - 1],
        num + triangle[row - 1][column]
      );
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
}

const triangle1 = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

const res = minimumTotal(triangle1);
console.log(`outputs ${res}`);
