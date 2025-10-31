function getSneakyNumbers(nums: number[]): number[] {
  const n = nums.length - 2;

  let xorNums = 0;
  for (const v of nums) xorNums ^= v;

  let xorRange = 0;
  for (let i = 0; i < n; i++) xorRange ^= i;

  const xorAll = xorNums ^ xorRange;
  const diffBit = xorAll & -xorAll;

  let a = 0;
  let b = 0;

  for (const v of nums) {
    if ((v & diffBit) !== 0) a ^= v;
    else b ^= v;
  }
  for (let i = 0; i < n; i++) {
    if ((i & diffBit) !== 0) a ^= i;
    else b ^= i;
  }

  return [a, b];
}

function getSneakyNumbersSimple(nums: number[]): number[] {
  const res: number[] = []
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) res.push(num);
    if (res.length === 2) break;
    seen.add(num);
  }
  return res;
}
