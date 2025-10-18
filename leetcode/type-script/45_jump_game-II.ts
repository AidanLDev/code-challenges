function jump(nums: number[]): number {
  if (nums.length === 1) return 0;
  let jumps = 0;
  let curJumps = nums[0];
  let curIdx = 0;
  const n = nums.length - 1;
  while (curIdx <= n) {
    if (curIdx + nums[curIdx] >= n) return jumps + 1;
    if (curJumps <= 0) return jumps;

    let curBestIdx = curIdx;
    let curBestReach = curIdx;

    const maxReachFromCur = curIdx + nums[curIdx];
    for (let i = curIdx + 1; i <= Math.min(n, maxReachFromCur); i++) {
      const reach = nums[i] + i;
      if (reach > curBestReach) {
        curBestReach = reach;
        curBestIdx = i;
      }
    }

    if (curIdx === curBestIdx) return jumps;
    jumps++;
    curIdx = curBestIdx;
  }
  return jumps;
}

let jumpExample1 = [2, 3, 1, 1, 4];
let jumpExpectedRes1 = 2;
let jumpExample2 = [2, 3, 0, 1, 4];
let jumpExpectedRes2 = 2;
let jumpRes1 = jump(jumpExample1);
let jumpRes2 = jump(jumpExample2);
console.log(`expected res1 ${jumpExpectedRes1} res ${jumpRes1}`);
console.log(`expected res2 ${jumpExpectedRes2} res ${jumpRes2}`);
