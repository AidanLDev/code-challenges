function rec(arr, i, subset, subsets) {
  if (i === arr.length) {
    subsets.push([...subset]);
  } else {
    rec(arr, i + 1, [...subset, arr[i]], subsets);
    rec(arr, i + 1, subset, subsets);
  }
}

const subsets = [];
// rec([1, 2, 3, 4], 0, [], subsets);
// console.log("recursive: ", subsets);

function bitmaniuplation(arr) {
  const subsets = [];
  for (let i = 0; i < arr.length ** 2; i++) {
    const binaryNumber = i.toString(2).padStart(4, "0");
    const subset = [];
    for (let j = 0; j < arr.length; j++) {
      if (binaryNumber[j] === "1") {
        subset.push(arr[j]);
      }
    }
    subsets.push(subset);
  }
  return subsets;
}

console.log("bitManipulation: ", bitmaniuplation([1, 2, 3, 4]));
