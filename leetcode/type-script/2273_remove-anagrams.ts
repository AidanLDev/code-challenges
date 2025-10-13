/*
You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

 

Example 1:

Input: words = ["abba","baba","bbaa","cd","cd"]
Output: ["abba","cd"]
Explanation:
One of the ways we can obtain the resultant array is by using the following operations:
- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
  Now words = ["abba","baba","cd","cd"].
- Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
  Now words = ["abba","cd","cd"].
- Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
  Now words = ["abba","cd"].
We can no longer perform any operations, so ["abba","cd"] is the final answer.
Example 2:

Input: words = ["a","b","c","d","e"]
Output: ["a","b","c","d","e"]
Explanation:
No two adjacent strings in words are anagrams of each other, so no operations are performed.
*/
function removeAnagrams(words: string[]): string[] {
  function getLetterCount(word: string): Record<string, number> {
    const count: Record<string, number> = {};
    for (const letter of word) {
      if (count[letter]) {
        count[letter]++;
      } else {
        count[letter] = 1;
      }
    }
    return count;
  }
  function isAnagram(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;
    const word1Count = getLetterCount(word1);
    const word2Count = getLetterCount(word2);
    for (const letter of Object.keys(word1Count)) {
      if (word1Count[letter] !== word2Count[letter]) return false;
    }
    return true;
  }
  const finalWords = [...words];
  for (let i = 0; i < words.length - 1; i++) {
    if (isAnagram(words[i], words[i + 1])) {
      finalWords.splice(finalWords.indexOf(words[i + 1]), 1);
    }
  }
  return finalWords;
}

const removeAnagramsRes1 = removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]);
console.log("removeAnagramsRes1: ", removeAnagramsRes1);
