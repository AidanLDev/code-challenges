function gcdOfStrings(str1: string, str2: string): string {
  let longest = "";
  let curString = "";
  for (let i = 0; i < str2.length; i++) {
    curString += str2[i];
    // Cannot work because the word needs to go into s1 and s2 x2 times
    if (str1.length % curString.length !== 0 || str2.length % curString.length)
      continue;

    if (
      curString.repeat(str1.length / curString.length) === str1 &&
      curString.repeat(str2.length / curString.length) === str2
    ) {
      longest = curString;
    }
  }
  return longest;
}
let gcdOfStringsS1 = "ABCABC";
let gcdOfStringsS2 = "ABC";
let gcdOfStringsRes1 = gcdOfStrings(gcdOfStringsS1, gcdOfStringsS2);
console.log(gcdOfStringsRes1);
