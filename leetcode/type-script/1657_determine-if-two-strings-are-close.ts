function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  const word1Letters = new Set<string>();
  const word2Letters = new Set<string>();
  const word1Counts: Record<string, number> = {};
  const word2Counts: Record<string, number> = {};
  for (let i = 0; i < word1.length; i++) {
    if (!word1Letters.has(word1[i])) {
      word1Letters.add(word1[i]);
      word1Counts[word1[i]] = 1;
    } else {
      word1Counts[word1[i]]++;
    }

    if (!word2Letters.has(word2[i])) {
      word2Letters.add(word2[i]);
      word2Counts[word2[i]] = 1;
    } else {
      word2Counts[word2[i]]++;
    }
  }

  // Check if word1 has the same letters as word2 and visa versa
  for (const letter of word1Letters) {
    if (!word2Letters.has(letter)) return false;
  }
  for (const letter of word2Letters) {
    if (!word1Letters.has(letter)) return false;
  }

  // Check we have the same letter counts
  const word1CountsArray = Object.values(word1Counts).sort((a, b) => a - b);
  const word2CountsArray = Object.values(word2Counts).sort((a, b) => a - b);
  if (word1CountsArray.length !== word2CountsArray.length) return false;
  for (let i = 0; i < word1CountsArray.length; i++) {
    if (word1CountsArray[i] !== word2CountsArray[i]) return false;
  }

  return true;
}
/*
Criteria
same length
have the same letters as each other
have same letter counts
*/

const example1Word1 = "abc";
const example1Word2 = "bca";
const res1 = closeStrings(example1Word1, example1Word2);

const example2Word1 = "a";
const example2Word2 = "b";
const res2 = closeStrings(example2Word1, example2Word2);

const example3Word1 = "cabbba";
const example3Word2 = "abbccc";
const res3 = closeStrings(example3Word1, example3Word2);

console.log(`Expecting res1 to be true and got ${res1}`);
console.log(`Expecting res2 to be false and got ${res2}`);
console.log(`Expecting res3 to be true and got ${res3}`);

export default {};
