/*
Your country has an infinite number of lakes. Initially, all the lakes are empty, but when it rains over the nth lake, the nth lake becomes full of water. If it rains over a lake that is full of water, there will be a flood. Your goal is to avoid floods in any lake.

Given an integer array rains where:

rains[i] > 0 means there will be rains over the rains[i] lake.
rains[i] == 0 means there are no rains this day and you can choose one lake this day and dry it.
Return an array ans where:

ans.length == rains.length
ans[i] == -1 if rains[i] > 0.
ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.
If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array.

Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty lake, nothing changes.

 

Example 1:

Input: rains = [1,2,3,4]
Output: [-1,-1,-1,-1]
Explanation: After the first day full lakes are [1]
After the second day full lakes are [1,2]
After the third day full lakes are [1,2,3]
After the fourth day full lakes are [1,2,3,4]
There's no day to dry any lake and there is no flood in any lake.
Example 2:

Input: rains = [1,2,0,0,2,1]
Output: [-1,-1,2,1,-1,-1]
Explanation: After the first day full lakes are [1]
After the second day full lakes are [1,2]
After the third day, we dry lake 2. Full lakes are [1]
After the fourth day, we dry lake 1. There is no full lakes.
After the fifth day, full lakes are [2].
After the sixth day, full lakes are [1,2].
It is easy that this scenario is flood-free. [-1,-1,1,2,-1,-1] is another acceptable scenario.
Example 3:

Input: rains = [1,2,0,1,2]
Output: []
Explanation: After the second day, full lakes are  [1,2]. We have to dry one lake in the third day.
After that, it will rain over lakes [1,2]. It's easy to prove that no matter which lake you choose to dry in the 3rd day, the other one will flood.
*/
function avoidFlood(rains: number[]): number[] {
  const n = rains.length;
  const ans: number[] = new Array(n).fill(1);
  const lastSeen = new Map<number, number>();

  const dryDays: number[] = [];

  const binarySearchFirstGreater = (arr: number[], target: number) => {
    let lo = 0;
    let hi = arr.length - 1;
    let res = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] > target) {
        res = mid;
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return res;
  };

  for (let i = 0; i < n; i++) {
    const lake = rains[i];
    if (lake === 0) {
      dryDays.push(i);
    } else {
      ans[i] = -1;
      if (lastSeen.has(lake)) {
        const prev = lastSeen.get(lake)!;
        const pos = binarySearchFirstGreater(dryDays, prev);
        if (pos === -1) {
          return [];
        }
        const dryDayIdx = dryDays[pos];
        ans[dryDayIdx] = lake;
        dryDays.splice(pos, 1);
      }
      lastSeen.set(lake, i);
    }
  }

  return ans;
}

const floodInput1 = [1, 2, 3, 4];
const floodInput2 = [1, 2, 0, 0, 2, 1];
const floodInput3 = [1, 2, 0, 1, 2];
const floodRes1 = avoidFlood(floodInput1);
const floodRes2 = avoidFlood(floodInput2);
const floodRes3 = avoidFlood(floodInput3);
console.log({
  floodRes1,
  floodRes2,
  floodRes3,
});
