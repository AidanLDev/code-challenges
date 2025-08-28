export function binarySearch(numbers: number[], target: number): number {
  let leftIdx = 0;
  let rightIdx = numbers.length - 1;

  while (leftIdx <= rightIdx) {
    const mid = Math.floor((leftIdx + rightIdx) / 2);
    if (numbers[mid] === target) return mid;
    if (numbers[mid] > target) {
      rightIdx = mid - 1;
    } else {
      leftIdx = mid + 1;
    }
  }
  return -1;
}

console.log("res: ", binarySearch([-1, 0, 2, 4, 6, 8], 4));
