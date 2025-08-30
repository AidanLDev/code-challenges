/**
 * @description You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
 *  After performing at most k replacements, return the length of the longest substring which contains only one distinct character.
 * @param s upper case chars
 * @param k the amount of chars we can convert
 * @returns the number of the longest repeated character in the array
 */
export function longestCharReplacement(s: string, k: number): number {
  let curLongest = 0;
  let l = 0;
  const charCount: Record<string, number> = {};
  let maxCount = 0;

  for (let r = 0; r < s.length; r++) {
    charCount[s[r]] = (charCount[s[r]] || 0) + 1;
    maxCount = Math.max(maxCount, charCount[s[r]]);

    while (r - l + 1 - maxCount > k) {
      charCount[s[l]]--;
      l++;
    }

    curLongest = Math.max(curLongest, r - l + 1);
  }

  return curLongest;
}

const str1 = "ABAB";
const k1 = 2;

console.log("output1: ", longestCharReplacement(str1, k1));
