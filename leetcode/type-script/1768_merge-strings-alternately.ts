function mergeAlternately(word1: string, word2: string): string {
  /*
    Loop through the longest word amount of times, build a res array
    check if anything exists at word1[idx] if so add it to the arr, then check if anything exists at word2[idx] if so add it
    return the res.join("")
  */
  const res: string[] = [];
  const n = Math.max(word1.length, word2.length);
  for (let i = 0; i < n; i++) {
    if (word1[i]) res.push(word1[i]);
    if (word2[i]) res.push(word2[i]);
  }
  return res.join("");
}
