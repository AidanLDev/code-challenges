class DetectSquares {
  private readonly pointCount;
  private readonly points: number[][]
  constructor() {
    this.pointCount = new Map();
    this.points = [];
  }

  /**
   * @param {number[]} point
   * @return {void}
   */
  add(point: number[]): void {
    const p = point.join(",");
    this.pointCount.set(p, (this.pointCount.get(p) || 0) + 1);
    this.points.push(point);
  }

  /**
   * @param {number[]} point
   * @return {number}
   */
  count(point: number[]): number {
    let res = 0;
    const [pointX, pointY] = point;
    for (const [x, y] of this.points) {
      if (
        Math.abs(pointX - x) !== Math.abs(pointY - y) ||
        x === pointX ||
        y === pointY
      ) {
        continue;
      }
      res +=
        (this.pointCount.get(`${x},${pointY}`) || 0) *
        (this.pointCount.get(`${pointX},${y}`) || 0);
    }
    return res;
  }
}
