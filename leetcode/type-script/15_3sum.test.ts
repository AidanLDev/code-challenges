import { threeSum } from "./15_3sum";

describe("threeSum", () => {
  const cases = [
    {
      input: [-1, 0, 1, 2, -1, -4],
      output: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    {
      input: [0, 1, 1],
      output: [],
    },
    {
      input: [0, 0, 0],
      output: [[0, 0, 0]],
    },
  ];

  function normalize(arr: number[][]): number[][] {
    return arr
      .map((triplet) => triplet.slice().sort((a, b) => a - b))
      .sort((a, b) => {
        for (let i = 0; i < 3; i++) {
          if (a[i] !== b[i]) return a[i] - b[i];
        }
        return 0;
      });
  }

  cases.forEach(({ input, output }, idx) => {
    it(`Test case ${idx + 1}`, () => {
      expect(normalize(threeSum(input))).toEqual(normalize(output));
    });
  });
});
