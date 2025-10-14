function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  console.log("Intervals after sort: ", intervals);
  return intervals;
}

let mergeIntervalsInput1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
let mergeIntervalsRes1 = merge(mergeIntervalsInput1);
console.log("Res1: ", mergeIntervalsRes1);
// Output: [[1,6],[8,10],[15,18]]
