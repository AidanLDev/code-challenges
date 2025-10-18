interface Interval {
  start: number;
  end: number;
}

function minMeetingRooms(intervals: Interval[]): number {
  if (intervals.length === 0) return 0;

  const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
  const ends = intervals.map((i) => i.end).sort((a, b) => a - b);

  let s = 0
  let e = 0;
  let used = 0;
  let maxUsed = 0;

  while (s < starts.length) {
    if (starts[s] < ends[e]) {
      used++;
      maxUsed = Math.max(maxUsed, used);
      s++;
    } else {
      // a meeting ended, free a room
      used--;
      e++;
    }
  }

  return maxUsed;
}

let minMeetingsTestData1 = [
  { start: 0, end: 40 },
  { start: 5, end: 10 },
  { start: 15, end: 20 },
];
let minMeetingsExpectedOutput1 = 2;
let minMeetingsTestData2 = [{ start: 4, end: 9 }];
let minMeetingsExpectedOutput2 = 1;
let minMeetingsRes1 = minMeetingRooms(minMeetingsTestData1);
let minMeetingsRes2 = minMeetingRooms(minMeetingsTestData2);

console.log(
  `Res 1 expects ${minMeetingsExpectedOutput1} and gets ${minMeetingsRes1}`
);
console.log(
  `Res 2 expects ${minMeetingsExpectedOutput2} and gets ${minMeetingsRes2}`
);
