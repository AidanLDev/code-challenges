import { dailyTemperatures } from "./739_daily-temperatures";

describe("739_daily-temperatures", () => {
  it("outputs: [1,1,4,2,1,1,0,0] for input: ", () => {
    const res = [1, 1, 4, 2, 1, 1, 0, 0];
    const input = [73, 74, 75, 71, 69, 72, 76, 73];

    expect(dailyTemperatures(input)).toEqual(res);
  });
  it("Outputs: [1,1,1,0] for input: [30,40,50,60] ", () => {
    const res = [1, 1, 1, 0];
    const input = [30, 40, 50, 60];

    expect(dailyTemperatures(input)).toEqual(res);
  });
});
