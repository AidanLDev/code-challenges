const nums = [3, 7, 23, 66, 234, 12, 1, 67, 34];
const numToFind = 66;

console.log(`About to try and find ${numToFind} in the array ${nums}`);

function liniearSearch(nums, numToFind) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === numToFind) {
      return i;
    }
  }
  return -1;
}

console.log(`Found ${numToFind} at index ${liniearSearch(nums, numToFind)}`);
