import { majorityElement } from "./169_majority-element";

describe("Testing 169 Majority Element, given an array of nums of size n, an element is the majority if the amount of nums is larger than n/2.", () => {
  it("nums = [3,2,3]. Output = 3", () => {
    expect(majorityElement([3, 2, 3])).toEqual(3);
  });
  it("nums = [2,2,1,1,1,2,2]. Output = 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  });
});
