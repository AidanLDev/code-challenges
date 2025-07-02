function possibleStringCount(word: string): number {
  const letterCount: Record<string, number> = {};
  word.split("").forEach((letter, idx, wordArr) => {
    if (letter === wordArr[idx - 1]) {
      if (letterCount[letter]) {
        letterCount[letter] = letterCount[letter] + 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  });
  return Object.values(letterCount).reduce((cur, acc) => acc + cur, 1);
}
