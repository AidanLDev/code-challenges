/*
  -- Thinking...
  track validSubLen
Loop through the shortest str
keep track of curSub = ""
loop through other str starting at str2Idx
    if str[j] === str[i]
    curSub + str[j]
    validSubLen = Math.max(vsl, curSub.len)
    str2Idx = j
    break

*/
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

let example1Text1 = "abcde";
let example1Text2 = "ace";
let example2Text1 = "ezupkr";
let example2Text2 = "ubmrapg";
let longestCommonSubRes1 = longestCommonSubsequence(
  example1Text1,
  example1Text2
);
let longestCommonSubRes2 = longestCommonSubsequence(
  example2Text1,
  example2Text2
);

console.log("Expecting 3, got: ", longestCommonSubRes1);
console.log("Expecting 2, got: ", longestCommonSubRes2);
