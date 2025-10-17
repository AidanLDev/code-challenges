interface Interval {
  start: number;
  end: number;
}

function canAttendMeetings(intervals: Interval[]): boolean {
  let idx = 0;
  intervals.sort((a, b) => a.start - b.start);
  for (const { start, end } of intervals) {
    if (idx + 1 < intervals.length && intervals[idx + 1].start < end) {
      return false;
    }
    idx++;
  }
  return true;
}
let testMeetings1 = [
  { start: 0, end: 30 },
  { start: 5, end: 10 },
  { start: 15, end: 20 },
];

let testMeetings2 = [
  { start: 5, end: 8 },
  { start: 9, end: 15 },
];

const canAttendRes1 = canAttendMeetings(testMeetings1);
const canAttendRes2 = canAttendMeetings(testMeetings2);

console.log("Res1 & 2", { canAttendRes1, canAttendRes2 });
