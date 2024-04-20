function _partition(arr, low, high) {
  let pivot = arr[high],
    pivotloc = low;
  for (let i = low; i <= high; i++) {
    // inserting elements of less value
    // to the left of the pivot location
    if (arr[i] < pivot) {
      let temp = arr[i];
      arr[i] = arr[pivotloc];
      arr[pivotloc] = temp;
      pivotloc++;
    }
  }

  // swapping pivot to the final pivot location
  let temp = arr[high];
  arr[high] = arr[pivotloc];
  arr[pivotloc] = temp;

  return pivotloc;
}

// finds the kth position (of the sorted array)
// in a given unsorted array i.e this function
// can be used to find both kth largest and
// kth smallest element in the array.
// ASSUMPTION: all elements in arr[] are distinct
function kthSmallest(arr, low, high, k) {
  // find the partition
  let partition = _partition(arr, low, high);

  // if partition value is equal to the kth position,
  // return value at k.
  if (partition == k - 1) return arr[partition];
  // if partition value is less than kth position,
  // search right side of the array.
  else if (partition < k - 1) return kthSmallest(arr, partition + 1, high, k);
  // if partition value is more than kth position,
  // search left side of the array.
  else return kthSmallest(arr, low, partition - 1, k);
}

// Driver Code
let array = [10, 4, 5, 8, 6, 11, 26];
let arraycopy = [10, 4, 5, 8, 6, 11, 26];
let kPosition = 3;
let length = array.length;

if (kPosition > length) {
  document.write('Index out of bound<br>');
} else {
  // find kth smallest value
  document.write(
    'K-th smallest element in array : ' +
      kthSmallest(arraycopy, 0, length - 1, kPosition) +
      '<br>'
  );
}

// This code is contributed by rag2127
