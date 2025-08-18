import { topKFrequentElements } from "./347_top-k-frequent-elements";

describe("347_top-k-frequent-elements - Find the top k most frequent numbers in an array", () => {
  it("nums = [1,1,1,2,2,3] k = 2 returns [1, 2]", () => {
    expect(topKFrequentElements([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });
  it("nums = [1], k = 1 outputs [1]", () => {
    expect(topKFrequentElements([1], 1)).toEqual([1]);
  });
});
