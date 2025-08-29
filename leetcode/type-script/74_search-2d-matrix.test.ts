import {
  searchTwoDMatrix,
  matrixOne,
  targetOne,
  matrixTwo,
  targetTwo,
} from "./74_search-2d-matrix";

describe("74_search-2d-matrix", () => {
  it("Finds the target: ", () => {
    expect(searchTwoDMatrix(matrixOne, targetOne)).toBe(true);
  });
  it("Returns false when no target within matrix", () => {
    expect(searchTwoDMatrix(matrixTwo, targetTwo)).toBe(false);
  });
});
