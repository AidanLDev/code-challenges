function twoSum(numbers: number[], target: number): number[] {
  let leftIdx = 0;
  let rightIdx = numbers.length - 1;
  let resultArr: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[leftIdx] + numbers[rightIdx];
    if (sum === target) {
      resultArr.push(leftIdx + 1, rightIdx + 1);
      return resultArr;
    }
    if (sum > target) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }
  return resultArr;
}
