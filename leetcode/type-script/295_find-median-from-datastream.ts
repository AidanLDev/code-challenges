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
    console.log("adding in num: ", num);
    this.nums.push(num);
    this.nums.sort((a, b) => a - b);
    console.log("nums after sorting is: ", this.nums);
  }

  /**
   * @description returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted
   */
  findMedian(): number {
    if (this.nums.length % 2 === 0) {
      // Even so return the two middle nums
      const num1 = this.nums[Math.floor(this.nums.length / 2)];
      const num2 = this.nums[Math.floor(this.nums.length / 2) - 1];
      console.log(`${num1} ${num2} and the sum / 2 is ${(num1 + num2) / 2}`);
      return (num1 + num2) / 2;
    }
    console.log(`Med num is ${this.nums[Math.floor(this.nums.length / 2)]}`);
    return this.nums[Math.floor(this.nums.length / 2)];
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
