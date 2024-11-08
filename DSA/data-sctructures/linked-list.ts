interface ILinkNode {
  val: number;
  next: ILinkNode | null;
}

class MyLinkedList {
  private head: ILinkNode | null;
  constructor() {
    this.head = null
  }
  
  get(index: number):number {

    if (!this.head) {
      return -1
    }

    let idx = 0;
    
    return -1;
  }

  addAtHead(val: number): void {
    console.log("Adding: ", val, " at head, head is currently ", this.head);
    
    let oldHead:ILinkNode | null = null;
    if (this.head) {
      oldHead = {...this.head};
    }

    if (!this.head) {
      this.head = {
        next: null,
        val: -1
      }
    }

    this.head.val = val;
    this.head.next = oldHead;
  }

  addAtTail(val: number): void {
    /*
     * if !this.head, set the tail to just run addAtHead(val)
     * go through list until next === null
     * make cur.next = val
     * make cur.next.next = null
     */
    if (!this.head) {
      this.addAtHead(val)
    }

    let cur: ILinkNode | null = this.head;
    while (cur && cur?.next != null) {
      if (cur) {
        cur = cur?.next || null;
      } else {
        break;
      }
    }
    // make cur.next = { val, next: null }
    if (cur) {
      cur.next = { val, next: null }
    }
  }

  addAtIndex(index: number, val: number): void {
   if (!head) {
    return -1
   }
   if (index === 0) {
    this.addAtHead(val);
   }
   let curIdx = 0;
   let cur = this.head;
   while(cur != null) {
    if (index
   }
  }

  deleteAtIndex(index: number): void {

  }

  logThis(): void {
    console.log(this)
  } 
}


const listTest = new MyLinkedList();
console.log("Initialised list")
listTest.logThis()
console.log("Get val at idx of 5 (despite there being no 5)")
listTest.get(5);
listTest.logThis();
console.log("Make the head val 3")
listTest.addAtHead(3)
listTest.logThis();
console.log("Adding 5 to tail")
listTest.addAtTail(5)
listTest.logThis()

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
