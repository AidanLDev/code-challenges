class MedianFinder {
  /**
   * @description Initisialises the data-structure
   */
  private readonly nums: number[] = [];
  constructor() {}

  /**
   * @description adds the integer num from the data stream to the data structure
   * @param num The number to add to the data structure
   */
  addNum(num: number): void {
    let leftIdx = 0;
    let rightIdx = this.nums.length - 1;
    while (leftIdx <= rightIdx) {
      const mid = Math.floor((leftIdx + rightIdx) / 2);
      if (this.nums[mid] === num) {
        this.nums.splice(mid, 0, num);
        return;
      }
      if (this.nums[mid] > num) {
        rightIdx = mid - 1;
      } else {
        leftIdx = mid + 1;
      }
    }
    this.nums.splice(leftIdx, 0, num);
  }

  /**
   * @description returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted
   */
  findMedian(): number {
    if (this.nums.length % 2 === 0) {
      // Even so return the two middle nums
      const num1 = this.nums[Math.floor(this.nums.length / 2)];
      const num2 = this.nums[Math.floor(this.nums.length / 2) - 1];
      return (num1 + num2) / 2;
    }
    return this.nums[Math.floor(this.nums.length / 2)];
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
