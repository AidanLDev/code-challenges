const vowels = new Set(["a", "e", "i", "o", "u"]);
function maxVowels(s: string, k: number): number {
  // check first k letters of s
  let maxCount = 0;
  for (let i = 0; i < Math.min(k, s.length); i++) {
    if (vowels.has(s[i])) {
      maxCount++;
    }
  }

  if (maxCount === k) return k // Can't do better

  let curCount = maxCount;
  for (let i = k; i < s.length; i++) {
    // If one we're adding from the window is in vowels increment curCount
    if (vowels.has(s[i])) curCount++;
    // If one we're loosing is in vowels decrement curCount
    if (vowels.has(s[i - k])) curCount--;
    // set maxCount to be max of curCount or maxCount
    maxCount = Math.max(curCount, maxCount);
  }

  return maxCount;
}
