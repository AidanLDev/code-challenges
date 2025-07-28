import { combine } from "./77-combinations";

describe("77-combinations, given two ints, k and n, return all possible combinations of k from the range 1...n", () => {
  it("Given k = 2, n = 4 it should return [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]", () => {
    expect(combine(4, 2)).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });
});
