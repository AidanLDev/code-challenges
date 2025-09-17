function palindromePartitioning(s: string): string[][] {
  const partitions: string[][] = [];

  function isPalindrome(word: string): boolean {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
  }

  function backtrack(curIdx: number, path: string[]) {
    if (curIdx === s.length) {
      partitions.push([...path]);
      return;
    }

    for (let i = curIdx + 1; i <= s.length; i++) {
      const substr = s.slice(curIdx, i);
      if (isPalindrome(substr)) {
        path.push(substr);
        backtrack(i, path);
        path.pop();
      }
    }
  }

  backtrack(0, []);

  return partitions;
}
