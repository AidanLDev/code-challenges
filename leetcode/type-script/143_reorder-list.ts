import { generateTestList, printList } from "./listHelpers";

interface INode {
  val: number;
  next?: INode | null;
}
export function reOrder(head: INode | null) {
  if (!head || !head.next) return;

  // find the middle
  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }

  // Reverse the second half
  let prev: INode | null = null;
  let cur = slow.next;

  while (cur) {
    let nextTemp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTemp;
  }
  slow.next = null;

  // merge the two halves
  let first = head,
    second = prev;
  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;
    first = temp1!;
    second = temp2!;
  }
}

const testList = generateTestList();
console.log("testList: ");
printList(testList!);
console.log("After reorder:");
reOrder(testList!);
printList(testList!);
