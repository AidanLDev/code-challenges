function countSubstrings(s: string): number {
  if (!s) return 0;
  if (s.length <= 1) return 1;
  function numOfSubStrings(left: number, right: number): number {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      count++
    }
    return count;
  }

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const even = numOfSubStrings(i, i + 1);
    const odd = numOfSubStrings(i, i);
    total += even + odd;
  }
  return total;
}
