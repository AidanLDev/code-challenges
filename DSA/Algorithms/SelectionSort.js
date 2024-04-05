/*
The steps needed for selection sort are as follows:
- Check each number of the array from left to right
- Determine which value is least, keeping track of the currentLeast's index in a variable
- IF we find a smaller number, replace our currentLeast with the index of that number
- Once we've finished our iteration, swap the first index with the value at currentLeast
- Once we complete an iteration, we start the next iteration one index further up the array as the first index is already sorted
- We repeat these steps until all the data is sorted

### Runtime
Selection sort contains two types of steps, comparisons and swaps. We compare each element with the lowest number we've encountered and we swap the lowest number into its correct position. If we had an array of 4 elements:

*number of comparisons*
`4 + 3 + 2 + 1 = 10`
To put that more generally we have:
`(N - 1) + (N - 2) + (N - 3) ... + 1` comparisons

As for swaps, we only have to make at most 1 swap per passthrough, compared to [[Bubble Sort]] which at worst, we'd have to make a swap at every comparison.

This means that Selection Sort is twice as fast as Bubble Sort, however in the world of Big O Selection Sort is still described as `N(N^2)`. In Reality the run time is `N(N^2 / 2)`, however Big O ignores constants.
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
