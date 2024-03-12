class MyCircularQueue {
  private queue: number[];
  private head: number;
  private tail: number;
  private count: number;
  private size: number;

  constructor(k: number) {
    this.queue = new Array(k).fill(0);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
    this.size = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    this.count++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.head = (this.head + 1) % this.size;
    this.count--;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    let rearIndex = (this.tail - 1 + this.size) % this.size;
    return this.queue[rearIndex];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.size;
  }
}
