function numIslands(grid: string[][]): number {
  /*
    create seen array of m x n (basically copy of grid)
loop through cols/rows
    if val === 1
     keep going through it's adjecent values until we reach a 0
    then go through the other adjecent values until we reach a 0
    repeat until we've done that for up down left and right
    if val is seen continue
    if val is out of bounds < 0 or > arr.length continue
    once we ran out of options increment islands by 1 and continue looping
    */
  const seen = grid.map((row) => row.map(() => false));
  let islands = 0;

  const maxRowLength = grid.length;
  const maxColHeight = grid[0].length;

  function explore(row: number, column: number) {
    const stack: [number, number][] = [[row, column]];
    while (stack.length) {
      const [curRow, curCol] = stack.pop()!;
      if (
        curRow < 0 ||
        curRow >= maxRowLength ||
        curCol < 0 ||
        curCol >= maxColHeight
      )
        continue;
      if (seen[curRow][curCol]) continue;
      seen[curRow][curCol] = true;
      if (grid[curRow][curCol] !== "1") continue;
      stack.push(
        [curRow - 1, curCol],
        [curRow + 1, curCol],
        [curRow, curCol - 1],
        [curRow, curCol + 1]
      );
    }
  }

  for (let row = 0; row < maxRowLength; row++) {
    for (let col = 0; col < maxColHeight; col++) {
      if (seen[row][col]) continue;
      if (grid[row][col] === "1") {
        islands++;
        explore(row, col);
      } else {
        seen[row][col] = true;
      }
    }
  }

  return islands;
}

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
const numIslandsRes = numIslands(grid1);
console.log("res: ", numIslandsRes);
