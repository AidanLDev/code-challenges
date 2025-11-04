/*
  -- use indexOf to check if zeros are at the end
  - if nums.indexOf(0) < nums.length - numZeros
  - splice it and push it to the end
*/
function moveZeroes(nums: number[]): void {
  if (nums.indexOf(0) === -1) return;
  const numZeros = nums.filter((num) => num === 0).length;
  while (nums.indexOf(0) < nums.length - numZeros) {
    nums.splice(nums.indexOf(0), 1);
    nums.push(0);
  }
}11

let moveZerosNums1 = [0, 1, 0, 3, 12];
const res1 = moveZeroes(moveZerosNums1);
console.log(`Expecting the 0s at the end ${res1}`);
export {};
