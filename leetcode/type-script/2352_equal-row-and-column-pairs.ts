function equalPairs(grid: number[][]): number {
  let pairsFound = 0;
  const n = grid.length;

  const cols: number[][] = [];

  for (let r = 0; r < n; r++) {
    let curCol: number[] = [];
    for (let c = 0; c < n; c++) {
      curCol.push(grid[c][r]);
    }
    cols.push(curCol);
  }

  function compareArrays(arr1: number[], arr2: number[]) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (compareArrays(grid[i], cols[j])) {
        pairsFound++;
      }
    }
  }

  return pairsFound;
}

const example1 = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];
const res1 = equalPairs(example1);
console.log(`Expecting example1 to be 1 and got ${res1}`);

export default {};
