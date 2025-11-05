/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 
*/
function isSubsequence(s: string, t: string): boolean {
  let sIdx = 0;
  for (let i = 0; i < t.length; i++) {
    if (sIdx === s.length - 1 && s[sIdx] === t[i]) return true;
    if (s[sIdx] === t[i]) sIdx++;
  }

  return false;
}

let example1S = "abc";
let example1T = "ahbgdc";
let example2S = "axc";
let example2T = "ahbgbc";

let res1 = isSubsequence(example1S, example1T);
let res2 = isSubsequence(example2S, example2T);

console.log(`Expecting res1 to be true and got... ${res1}`);
console.log(`Expecting res2 to be false and got... ${res2}`);

export {};
