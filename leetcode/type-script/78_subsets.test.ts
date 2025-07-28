import { subsets } from "./78_subsets";

describe("78_subsets, given an array of numbers, nums, return all possible subsets (the powerset)", () => {
  it("Input: nums = [1,2,3], Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]", () => {
    expect(subsets([1, 2, 3])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]);
  });
  it("Input: nums = [0], Output: [[],[0]]", () => {
    expect(subsets([0])).toEqual([[], [0]]);
  });
});
