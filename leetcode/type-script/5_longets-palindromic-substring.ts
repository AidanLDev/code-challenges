function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  function expandAroundCenter(left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const odd = expandAroundCenter(i, i);
    if (odd.length > longest.length) longest = odd;
    const even = expandAroundCenter(i, i + 1);
    if (even.length > longest.length) longest = even;
  }

  return longest;
}
