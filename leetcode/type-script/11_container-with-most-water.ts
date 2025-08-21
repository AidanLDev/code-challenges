export function mostWater(height: number[]): number {
  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const h = Math.min(height[l], height[r]);
    const w = r - l;
    max = Math.max(max, h * w);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
}
