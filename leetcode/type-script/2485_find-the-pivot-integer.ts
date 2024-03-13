function pivotInteger(n: number): number {
  let left = 1;
  let right = n;

  let leftSum = 0;
  let rightSum = 0;

  while (true) {
    if (left === right) {
      // We've finished traversing all sum possibilities, return out of the loop
      return leftSum === rightSum ? left : -1;
    }

    if (leftSum < rightSum) {
      // increment left counter as left is too small
      leftSum += left++;
    } else {
      // decrement right counter as right is too big
      rightSum += right--;
    }
  }
}
