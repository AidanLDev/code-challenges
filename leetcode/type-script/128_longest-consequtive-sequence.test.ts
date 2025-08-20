import { longestConsecutive } from "./128_longest-consequtive-sequence";

describe("128_longest-consequtive-sequence", () => {
  [
    [[100, 4, 200, 1, 3, 2], 4],
    [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9],
    [[1, 0, 1, 2], 3],
  ].forEach((testArr, idx) => {
    it(`Running test ${idx}`, () => {
      expect(longestConsecutive(testArr[0] as number[])).toBe(
        testArr[1] as number
      );
    });
  });
});
