function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    if (i + 1 < intervals.length && intervals[i + 1][0] <= intervals[i][1]) {
      let newStart = Math.min(intervals[i][0], intervals[i + 1][0]);
      let newEnd = Math.max(intervals[i + 1][1], intervals[i][1]);
      let j = i;
      while (j + 1 < intervals.length && intervals[j + 1][0] <= newEnd) {
        newStart = Math.min(newStart, intervals[j + 1][0]);
        newEnd = Math.max(newEnd, intervals[j + 1][1]);
        j++;
      }
      i = j;
      res.push([newStart, newEnd]);
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}

let mergeIntervalsInput1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
let mergeIntervalsInput2 = [
  [1, 4],
  [0, 2],
  [3, 5],
];
let mergeIntervalsInput3 = [
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [1, 10],
];
let mergeIntervalsRes1 = merge(mergeIntervalsInput1);
let mergeIntervalsRes2 = merge(mergeIntervalsInput2);
let mergeIntervalsRes3 = merge(mergeIntervalsInput3);
console.log("Res1: ", mergeIntervalsRes1);
console.log("Res2: ", mergeIntervalsRes2);
console.log("Res3: ", mergeIntervalsRes3);
