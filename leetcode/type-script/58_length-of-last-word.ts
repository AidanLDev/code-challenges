function lengthOfLastWord(s: string): number {
  if (!s) {
    return 0;
  }
  let wordArr = s.trim().split(' ');
  return wordArr[wordArr.length - 1].length;
}
