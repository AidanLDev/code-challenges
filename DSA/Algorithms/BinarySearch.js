let numbers = [5, 10, 12, 120, 235, 6992];

function binarySearch(orderedArray, target) {
  let lowerBound = 0;
  let upperBound = orderedArray.length - 1;

  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((upperBound + lowerBound) / 2);
    if (orderedArray[midpoint] === target) {
      return midpoint;
    } else if (target < orderedArray[midpoint]) {
      // too big
      upperBound = midpoint - 1;
    } else {
      // too small
      lowerBound = midpoint + 1;
    }
  }
}

binarySearch(numbers, 10);
