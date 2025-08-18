export function topKFrequentElements(nums: number[], k: number): number[] {
  const freq: number[][] = Array(nums.length + 1).fill([]);
  const count: Record<string, number> = {};
  const result: number[] = [];
  for (const num of nums) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  Object.keys(count).forEach((key) => {
    freq[count[key]] = [...freq[count[key]], Number(key)];
  });

  while (result.length < k) {
    const topNumbers = freq.pop();
    if (topNumbers && topNumbers.length > 0) {
      for (const num of topNumbers) {
        result.push(num);
      }
    }
  }

  return result;
}
