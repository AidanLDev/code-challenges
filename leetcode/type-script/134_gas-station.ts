function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  if (n === 0) return -1;

  let total = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    total += diff;
    tank += diff;
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return total >= 0 && start < n ? start : -1;
}
/*
Start at the idx that will give us the most amount of gas after
the first travel
so loop through and take gas[i] - cost[i]
Choose the first highest as our starting idx
Loop through starting at that idx, and keep track of gas
if gas becoems < 0 before we get back to our original idx
return -1
else return our startingIdx
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
*/

let canCompleteGas1 = [1, 2, 3, 4, 5];
let canCompleteCost1 = [3, 4, 5, 1, 2];
let canCompleteExpectedRes1 = 3;
let canCompleteRes1 = canCompleteCircuit(canCompleteGas1, canCompleteCost1);
console.log(`Expected ${canCompleteExpectedRes1} got ${canCompleteRes1}`);
