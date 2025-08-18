import { encode, decode } from "./271_encode-and-decode-strings";

describe("271_encode-and-decode-strings - Encodes an array of strings into a single string then decodes it back to an array of strings", () => {
  test("Encodes ['Aidan', 'Loves', 'You'] into a single string", () => {
    expect(typeof encode(["Aidan", "Loves", "You"])).toBe("string");
  });
  test("Decodes AidanLovesYou into ['Aidan', 'Loves', 'You']", () => {
    expect(decode("Aidan¬Loves¬You")).toEqual(["Aidan", "Loves", "You"]);
  });
});
