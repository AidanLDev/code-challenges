/*
The steps needed for selection sort are as follows:
- Check each number of the array from left to right
- Determine which value is least, keeping track of the currentLeast's index in a variable
- IF we find a smaller number, replace our currentLeast with the index of that number
- Once we've finished our iteration, swap the first index with the value at currentLeast
- Once we complete an iteration, we start the next iteration one index further up the array as the first index is already sorted
- We repeat these steps until all the data is sorted
*/

function SelectionSort(numbersArr) {
  for (let i = 0; i < numbersArr.length; i++) {
    let currentSmallestIdx = i;
    for (let j = i; j < numbersArr.length; j++) {
      if (numbersArr[currentSmallestIdx] > numbersArr[j]) {
        currentSmallestIdx = j;
      }
    }
    if (currentSmallestIdx !== i) {
      let temp = numbersArr[currentSmallestIdx];
      numbersArr[currentSmallestIdx] = numbersArr[i];
      numbersArr[i] = temp;
    }
  }
  console.log(numbersArr);
}

const numbers = [10, 235, 12, 5, 6992];
