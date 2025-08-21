export function trap(height: number[]): number {
  let total = 0;

  let r = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  const maxLeftCollection: number[] = Array(height.length - 1).fill(0);
  const maxRightCollection: number[] = Array(height.length - 1).fill(0);

  for (let l = 0; l < height.length; l++) {
    maxLeftCollection[l] = maxLeft;
    maxRightCollection[r] = maxRight;

    maxLeft = Math.max(maxLeft, height[l]);
    maxRight = Math.max(maxRight, height[r]);
    r--;
  }

  for (let i = 0; i < height.length; i++) {
    const rainToCollect =
      Math.min(maxLeftCollection[i], maxRightCollection[i]) - height[i];
    if (rainToCollect > 0) total += rainToCollect;
  }

  return total;
}
