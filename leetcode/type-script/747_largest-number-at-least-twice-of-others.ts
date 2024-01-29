function dominantIndex(nums: number[]): number {
  /*
      var called largest
      create new array called numsDoubled
      for every el check:
          num > largest
              store largest = num
          numsDoubled.push(num * 2)
  */
  let largestNum: number = -Infinity;
  let largestNumIdx = -1;
  const numsDoubled: number[] = [];

  nums.forEach((num, idx) => {
    if (num > largestNum) {
      largestNum = num;
      largestNumIdx = idx;
    }
    numsDoubled.push(num * 2);
  });

  for (let i = 0; i < numsDoubled.length; i++) {
    // If largestNumIdx !== i
    // Check if numsDoubled[i] > largestNum
    // IF TRUE: return largestNumIdx = -1;
    if (largestNumIdx !== i) {
      // Only check if it's NOT the largest num, as the largest num doubled will always be bigger than the largestNum
      if (numsDoubled[i] > largestNum) {
        return (largestNumIdx = -1);
      }
    }
  }

  return largestNumIdx;
}
