import { trap } from "./42_trapping-rain-water";

describe("42_trapping-rain-water", () => {
  it("Outputs 6 for given this height: [0,1,0,2,1,0,1,3,2,1,2,1]", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
});
