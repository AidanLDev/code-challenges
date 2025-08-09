import {
  subStrings,
  convertDecimalToBinary,
} from "./chapter-5-bit-manipulation";

describe("5.1 subStrings", () => {
  it("inserts M into N between i and j (example from CTCI)", () => {
    // N = 10000000000 (binary) = 1024, M = 10101 (binary) = 21, i = 2, j = 6
    // Expected: 10001010100 (binary) = 1108
    expect(subStrings(0b10000000000, 0b10101, 2, 6)).toBe(0b10001010100);
  });

  it("inserts M into N at the lowest bits", () => {
    // N = 11111111, M = 0, i = 0, j = 3
    // Expected: 11110000
    expect(subStrings(0b11111111, 0b0, 0, 3)).toBe(0b11110000);
  });

  it("inserts M into N at the highest bits", () => {
    // N = 0, M = 0b111, i = 5, j = 7
    // Expected: 11100000
    expect(subStrings(0b0, 0b111, 5, 7)).toBe(0b11100000);
  });

  it("does not change N if M is 0 and i > j", () => {
    // Should handle gracefully (no bits to replace)
    expect(subStrings(0b101010, 0, 5, 2)).toBe(0b101010);
  });

  it("replaces all bits if i = 0 and j = 31", () => {
    // N = 0, M = all 1s, i = 0, j = 31
    expect(subStrings(0, 0xffffffff, 0, 31)).toBe(0xffffffff);
  });
});

describe("5.2 convertDecimalToBinary", () => {
  it("converts integer string to binary", () => {
    expect(convertDecimalToBinary("5")).toBe("101");
    expect(convertDecimalToBinary("0")).toBe("0");
    expect(convertDecimalToBinary("16")).toBe("10000");
  });

  it("converts simple decimal string to binary", () => {
    expect(convertDecimalToBinary("3.5")).toBe("11.1");
    expect(convertDecimalToBinary("2.25")).toBe("10.01");
    expect(convertDecimalToBinary("4.75")).toBe("100.11");
  });

  it("returns ERROR for non-terminating binary fractions", () => {
    expect(convertDecimalToBinary("0.1")).toBe("ERROR");
    expect(convertDecimalToBinary("0.3333333")).toBe("ERROR");
  });

  it("handles numbers with no fractional part", () => {
    expect(convertDecimalToBinary("7.0")).toBe("111");
  });

  it("handles numbers with fractional part 0", () => {
    expect(convertDecimalToBinary("8.000")).toBe("1000");
  });

  it("handles edge case: 0.0", () => {
    expect(convertDecimalToBinary("0.0")).toBe("0");
  });
});
