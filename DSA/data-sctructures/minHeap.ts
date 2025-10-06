export class MyMinHeap<T> {
  private data: T[] = [];
  private readonly cmp: (a: T, b: T) => number;

  constructor(compareFn?: (a: T, b: T) => number) {
    // Default comparator assumes numeric values; callers storing non-numeric
    // items should provide their own comparator (e.g. compare tuple by first element).
    this.cmp = compareFn ?? ((a: any, b: any) => a - b);
  }

  size(): number {
    return this.data.length;
  }

  peak(): T | undefined {
    if (this.data.length < 1) return undefined;
    return this.data[0];
  }

  push(val: T): void {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): T | undefined {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      this.sinkDown(0);
    }
    return top;
  }

  private bubbleUp(idx: number) {
    const data = this.data;
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.cmp(data[parent], data[idx]) <= 0) break;
      // Swap with parent
      [data[parent], data[idx]] = [data[idx], data[parent]];
      idx = parent;
    }
  }

  private sinkDown(idx: number) {
    const data = this.data;
    const n = data.length;
    while (true) {
      let left = 2 * idx + 1;
      let right = left + 1;
      let smallest = idx;
      if (left < n && this.cmp(data[left], data[smallest]) < 0) smallest = left;
      if (right < n && this.cmp(data[right], data[smallest]) < 0)
        smallest = right;
      if (smallest === idx) break;
      [data[smallest], data[idx]] = [data[idx], data[smallest]];
      idx = smallest;
    }
  }
}
