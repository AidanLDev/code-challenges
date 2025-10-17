function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0])
    let removals = 0;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++)  {
      if (intervals[i][0] < lastEnd) {
        removals++;
        lastEnd = Math.min(lastEnd, intervals[i][1]);
      } else {
        lastEnd = intervals[i][1];
      }
    }
    return removals;
};

let testIntervals1 = [[1,2],[2,3],[3,4],[1,3]];
let testRes1 = eraseOverlapIntervals(testIntervals1);
console.log("res1: ", testRes1);