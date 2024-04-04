function BubbleSort(arr) {
  let sorted = false;
  let numsToCheck = arr.length - 1;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < numsToCheck; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // If we had to make a swap, we want to go through our steps again
        sorted = false;
      }
    }
    numsToCheck--;
  }
  return arr;
}

const numbers = [10, 235, 12, 5, 6992];
const sortedNumbers = BubbleSort(numbers);
