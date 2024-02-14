function rearrangeArray(nums: number[]): number[] {
  let pos: number[] = nums.filter(x => x > 0);
  let neg = nums.filter(x => x < 0);
  let result: number[] = [];
  let i = 0,
    j = 0;

  while (i < pos.length && j < neg.length) {
    if (i < pos.length) result.push(pos[i++]);
    if (j < neg.length) result.push(neg[j++]);
  }

  return result;
}
