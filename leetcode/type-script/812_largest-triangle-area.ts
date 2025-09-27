function largestTriangleArea(points: number[][]): number {
  let maxArea = 0;
  const n = points.length;
  for (let i = 0; i < n - 2; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n - 1; j++) {
      const [x2, y2] = points[j];
      for (let k = j + 1; k < n; k++) {
        const [x3, y3] = points[k];
        const cross = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);
        const area = Math.abs(cross) / 2;
        if (area > maxArea) maxArea = area;
      }
    }
  }
  return maxArea;
}
