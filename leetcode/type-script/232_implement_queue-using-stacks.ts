type QueueNode = {
  value: number;
  next?: QueueNode;
}

class MyQueue {
  public size: number;
  private head?: QueueNode;
  private tail?: QueueNode;

  constructor() {
      this.size = 0;
      this.head = undefined;
      this.tail = undefined;
  }

  push(x: number): void {
      this.size++;
      const node = { value: x } as QueueNode;
      if (!this.tail) {
          this.tail = this.head = node;
      } else {
          this.tail.next = node;
          this.tail = node;
      }
  }

  pop(): number {
      if (!this.head) {
          return null;
      }
      const head = this.head;
      this.head = this.head.next;
      if (this.head === undefined) {
          this.tail = undefined;
      }
      head.next = undefined;
      this.size--;
      return head.value;
  }

  peek(): number {
      return this.head ? this.head.value : null;
  }

  empty(): boolean {
      return this.size <= 0;
  }
}


/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
