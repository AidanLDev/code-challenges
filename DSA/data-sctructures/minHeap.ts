export class MyMinHeap {
  private data: number[] = [];

  size(): number {
    return this.data.length;
  }

  peak(): number | undefined {
    if (this.data.length < 1) return undefined;
    return this.data[0];
  }

  push(val: number): void {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): number | undefined {
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
      if (data[parent] <= data[idx]) break;
      // Swap num with it's parent
      let parentVal = data[parent];
      data[parent] = data[idx];
      data[idx] = parentVal;
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
      if (left < n && data[left] < data[smallest]) smallest = left;
      if (right < n && data[right] < data[smallest]) smallest = right;
      if (smallest === idx) break;
      const smallestNum = data[smallest];
      data[smallest] = data[idx];
      data[idx] = smallestNum;
      idx = smallest;
    }
  }
}
