function kthCharacter(k: number): string {
  const MIN_ASCII = 97;
  const MAX_ASCII = 122;
  const ALPHABET_SIZE = 26;

  let word = "a";
  while (word.length < k) {
    const wordLength = word.length;
    for (let i = 0; i < wordLength; i++) {
      let nextCharCode = word.charCodeAt(i);
      nextCharCode = (nextCharCode + ALPHABET_SIZE) % MAX_ASCII;
      nextCharCode += MIN_ASCII;
      const charToAppend = String.fromCharCode(nextCharCode);
      word = word + charToAppend;
    }
  }
  return word[k - 1];
}
