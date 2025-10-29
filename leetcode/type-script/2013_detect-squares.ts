class DetectSquares {
  private readonly points: number[][] = [];
  constructor() {}

  add(point: number[]): void {
    this.points.push(point);
  }

  count(point: number[]): number {
    // Find all points that are of equal distance to the left or right, top or bottom of this point
    
  }
}
