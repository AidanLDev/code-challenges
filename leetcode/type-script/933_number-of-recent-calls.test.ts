import RecentCounter from "./933_number-of-recent-calls";

describe("933 - Number of Recent Calls", () => {
  it("should return counts as described in the prompt example", () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(1)).toEqual(1);
    expect(recentCounter.ping(100)).toEqual(2);
    expect(recentCounter.ping(3001)).toEqual(3);
    expect(recentCounter.ping(3002)).toEqual(3);
  });

  it("should handle multiple pings with old timestamps being removed", () => {
    const r = new RecentCounter();
    expect(r.ping(100)).toEqual(1);
    expect(r.ping(200)).toEqual(2);
    expect(r.ping(3100)).toEqual(3); // 100,200,3100 -> 3
    expect(r.ping(4200)).toEqual(2); // 3100,4200 -> 2
  });
});
