export class MyMaxHeap {
  private readonly data: number[] = [];

  size(): number {
    return this.data.length;
  }

  peak(): number | undefined {
    return this.size() < 1 ? undefined : this.data[0];
  }

  push(val: number): void {
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }

  pop(): number | undefined {
    if (this.data.length < 1) return undefined;
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      this.sinkDown(0);
    }
    return top;
  }

  private bubbleUp(idx: number): void {
    const data = this.data;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2); // -1 because we have a 0 based idx
      const parentVal = data[parentIdx];
      if (parentVal >= data[idx]) break;
      // Swap
      data[parentIdx] = data[idx];
      data[idx] = parentVal;
      idx = parentIdx;
    }
  }

  private sinkDown(idx: number): void {
    const data = this.data;
    const n = data.length;
    while (true) {
      const left = idx * 2 + 1;
      const right = left + 1;
      let largest = idx;
      if (left < n && data[left] > data[largest]) largest = left;
      if (right < n && data[right] > data[largest]) largest = right;
      if (largest === idx) break;
      const largestVal = data[largest];
      data[largest] = data[idx];
      data[idx] = largestVal;
      idx = largest;
    }
  }
}
