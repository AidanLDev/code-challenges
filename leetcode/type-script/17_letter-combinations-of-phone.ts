/**
 * @description Letter Combinations of a Phone Number
 * You are given a string digits made up of digits from 2 through 9 inclusive.
 * Each digit (not including 1) is mapped to a set of characters as shown below:
 * A digit could represent any one of the characters it maps to.
 * Return all possible letter combinations that digits could represent. You may return the answer in any order.
 *
 * @param digits a string of one or more digits
 * @returns all the combinations of our digits character representations
 */
function letterCombinationsOfPhone(digits: string): string[] {
  const numberMapping: Record<number, string[]> = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const combinations: string[] = [];

  function backtrack(curIdx: number, curPath: string[]) {
    if (curPath.length === digits.length) {
      combinations.push(curPath.join(""));
      return;
    }

    const curDigits: string[] = numberMapping[Number(digits[curIdx])];
    for (let i = 0; i < curDigits.length; i++) {
      curPath.push(curDigits[i]);
      backtrack(curIdx + 1, curPath);
      curPath.pop();
    }
  }

  backtrack(0, []);

  return combinations;
}
