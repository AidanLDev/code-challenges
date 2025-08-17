import { rob } from "./198_house-robber";

describe("198_house-robber", () => {
  it("Will rob a simple street [1,1,3,3]", () => {
    expect(rob([1, 1, 3, 3])).toEqual(4);
  });
});
