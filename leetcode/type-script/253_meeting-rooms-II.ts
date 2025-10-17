interface Interval {
  start: number;
  end: number;
}

function minMeetingRooms(intervals: Interval[]): number {
  let numDays = 0;

  return numDays;
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
