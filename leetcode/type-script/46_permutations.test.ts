import { permute } from "./46_permutations";

describe("46_permutations permute function should return all possible permutations of a list of numbers", () => {
  it("Given [1, 2, 3] it returns all 6 permutations", () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
  it("Given [0, 1] it returns 2 permutations", () => {
    expect(permute([0, 1])).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });
  it("Given [1] it returns 1 permutation", () => {
    expect(permute([1])).toEqual([[1]]);
  });
});
