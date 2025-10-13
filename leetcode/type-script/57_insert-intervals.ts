function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (!intervals.length) return [newInterval];
  if (!newInterval) return intervals;
  const [newStart, newEnd] = newInterval;
  if (newEnd < intervals[0][0]) {
    intervals.splice(0, 0, [newStart, newEnd]);
    return intervals;
  }
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (
      i >= 1 &&
      newStart > intervals[i - 1][1] &&
      newEnd < intervals[i + 1][0]
    ) {
      intervals.splice(i, 0, [newStart, newEnd]);
      return intervals;
    }
    if (newStart <= end && newEnd >= start) {
      let tempInterval = [Math.min(newStart, start), Math.max(end, newEnd)];
      let j = i + 1;
      while (j < intervals.length && intervals[j][0] <= tempInterval[1]) {
        tempInterval = [
          Math.min(tempInterval[0], intervals[j][0]),
          Math.max(tempInterval[1], intervals[j][1]),
        ];
        intervals.splice(j, 1);
      }
      intervals[i] = tempInterval;
      return intervals;
    }
  }
  intervals.push(newInterval);
  return intervals;
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
