import { generateParenthesies } from "./22_generate-parenthesies";

describe("22_generate-parenthesies", () => {
  it("Generates [()} for the input 1", () => {
    expect(generateParenthesies(1)).toEqual(["()"]);
  });
});
