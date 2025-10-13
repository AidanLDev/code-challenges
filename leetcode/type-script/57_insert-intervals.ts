function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (!newInterval || !newInterval.length) return intervals;
  if (!intervals || !intervals.length) return [newInterval];

  const res: number[][] = [];
  let i = 0;
  const n = intervals.length;
  const [newStart, newEnd] = newInterval;

  while (i < n && intervals[i][1] < newStart) {
    res.push(intervals[i]);
    i++;
  }

  let mergedStart = newStart;
  let mergedEnd = newEnd;
  while (i < n && intervals[i][0] <= mergedEnd) {
    mergedStart = Math.min(mergedStart, intervals[i][0]);
    mergedEnd = Math.max(mergedEnd, intervals[i][1]);
    i++;
  }
  res.push([mergedStart, mergedEnd]);

  while (i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
}

let intervals1 = [
  [1, 3],
  [4, 6],
];
let newInterval1 = [2, 5];
let intervalRes1 = insert(intervals1, newInterval1);
console.log(`Res1: ${intervalRes1}`);

let niceInsertIntervals1 = [
  [1, 2],
  [5, 7],
  [10, 12],
];
let niceInsertNewInterval1 = [3, 4];
let insertRes1 = insert(niceInsertIntervals1, niceInsertNewInterval1);
console.log(`Nice intervals res ${insertRes1}`);
