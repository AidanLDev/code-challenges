/**
 * @description Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
 * @param piles the number of piles of bananas, the pile[i] is the number of bananas in that pile
 * @param h the number of hours the guards are away
 */
export function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  function hoursNeeded(speed: number): number {
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / speed);
    }

    return hours;
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (hoursNeeded(mid) <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

const piles1 = [3, 6, 7, 11];
const h1 = 8;

const piles2 = [30, 11, 23, 4, 20];
const h2 = 5;

const piles3 = [30, 11, 23, 4, 20];
const h3 = 6;

console.log("res1: ", minEatingSpeed(piles1, h1));
console.log("res2: ", minEatingSpeed(piles2, h2));
console.log("res3: ", minEatingSpeed(piles3, h3));

/* Examples
Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
*/
