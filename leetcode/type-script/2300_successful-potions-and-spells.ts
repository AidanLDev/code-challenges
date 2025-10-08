/**
 * You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

 

Example 1:

Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.
Example 2:

Input: spells = [3,1,2], potions = [8,5,8], success = 16
Output: [2,0,2]
Explanation:
- 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
- 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
- 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful. 
Thus, [2,0,2] is returned.
 */

function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const res: number[] = [];
  const spellCache: Record<number, number> = {};
  potions.sort((a, b) => a - b);

  const binarySearch = (spell: number): number => {
    const minPotion = Math.ceil(success / spell);
    let left = 0;
    let right = potions.length - 1;
    let result = potions.length;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (potions[mid] >= minPotion) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return potions.length - result;
  };

  for (const spell of spells) {
    if (spellCache[spell] !== undefined) {
      res.push(spellCache[spell]);
      continue;
    }

    const count = binarySearch(spell);
    spellCache[spell] = count;
    res.push(count);
  }

  return res;
}

let spells1 = [5, 1, 3];
let potions1 = [1, 2, 3, 4, 5];
let success1 = 7;

const successfulPairsRes1 = successfulPairs(spells1, potions1, success1);
console.log("successfulPairsRes1: ", successfulPairsRes1);
