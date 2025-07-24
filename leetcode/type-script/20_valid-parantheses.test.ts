import { isValid2025 } from "./20_valid-parentheses";

describe("isValid2025", () => {
  it('returns true for "()"', () => {
    expect(isValid2025("()")).toBe(true);
  });

  it('returns true for "([{}])"', () => {
    expect(isValid2025("([{}])")).toBe(true);
  });

  it('returns false for "([)]"', () => {
    expect(isValid2025("([)]")).toBe(false);
  });
});
