/**
 * Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
Example 2:

Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.
 * @param hand The cards we have, card[i] is the number of the ith card
 * @param groupSize The size we need to group consectuvely increasing cards
 */
function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false; // Not divisible by group size so must be false
  if (groupSize <= 0) return false;

  const freq = new Map<number, number>();
  for (const num of hand) freq.set(num, (freq.get(num) || 0) + 1);
  const keys = Array.from(freq.keys()).sort((a, b) => a - b);

  for (const start of keys) {
    const count = freq.get(start)!;
    if (count === 0) continue; // Already used all of this num

    // Loop groupSize times
    for (let offset = 0; offset < groupSize; offset++) {
      const val = start + offset;
      const have = freq.get(val) || 0;
      if (have < count) return false; // Not got enough cards of this val
      freq.set(val, have - count);
    }
  }
  return true;
}
/*
  -- Thinking...
  - Order does not matter, helpful if we order in ascending order so consecutive cards are next to each other
  - could order hand, loop through and check if the hand is consecutive for groupSize times
  - If we get to the end and they've been consecutive, make sure localCount is === groupSize 
  - Could also check if hand is divisible by groupSize (hand.length % groupSize === 0?)
*/

let handInput1 = [1, 2, 3, 6, 2, 3, 4, 7, 8];
let groupSize1 = 3;
let handInput2 = [1, 2, 3, 4, 5];
let groupSize2 = 4;
let expectedHandRes1 = true;
let expectedHandRes2 = false;
let straightHandRes1 = isNStraightHand(handInput1, groupSize1);
let straightHandRes2 = isNStraightHand(handInput2, groupSize2);
console.log(`Res1 expects ${expectedHandRes1}. Got ${straightHandRes1}`);
console.log(`Res2 expects ${expectedHandRes2}. Got ${straightHandRes2}`);
