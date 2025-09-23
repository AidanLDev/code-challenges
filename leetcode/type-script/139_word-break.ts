/**
 * @description Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

 * @param s The word we're going to break
 * @param wordDict A list of words we're checking if the string can be space separated into
 */
function wordBreakBruteForce(s: string, wordDict: string[]): boolean {
  if (s.length === 0) return true;

  const memo: Record<string, boolean> = {};

  function dfs(sub: string): boolean {
    if (sub.length === 0) return true;
    if (memo.hasOwnProperty(sub)) return memo[sub];

    for (let i = 1; i <= sub.length; i++) {
      const prefix = sub.slice(0, i);
      if (wordDict.includes(prefix) && dfs(sub.slice(i))) {
        memo[sub] = true;
        return true;
      }
    }
    memo[sub] = false;
    return false;
  }

  return dfs(s);
}

function wordBreakDP(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const dp: boolean[] = Array(n + 1).fill(false);
  dp[n] = true;
  for (let i = n - 1; i >= 0; i--) {
    for (const word of wordDict) {
      const end = i + word.length;
      if (end <= n && s.slice(i, end) === word && dp[end]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[0];
}
