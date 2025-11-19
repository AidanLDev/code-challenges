class RecentCounter {
  private queue: number[] = [];
  constructor() {}

  ping(t: number): number {
    this.queue.push(t);
    while (this.queue.length && this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}

export default RecentCounter;
