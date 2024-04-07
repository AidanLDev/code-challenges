function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let tempValue = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > tempValue) {
      array[j] = array[j - 1]; // shift value to the right
      j--;
    }
    array[j] = tempValue; // Insert the tempValue back into our array where the "gap" is
  }
}

const numbers = [10, 235, 12, 5, 6992];
