import { ListNode } from '../../interfaces/interfaces';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let listLength = 1;
  let nodeIndex = 0;

  if (!head || !head.next) {
    return null;
  }

  let cur: ListNode | null = head;
  while (cur !== null && cur.next !== null) {
    listLength++;
    cur = cur?.next || null;
  }

  nodeIndex = listLength - n;

  // Need to handle nodeIndex 0
  /*
      In that case, we get rid of the FIRST element of the list
  */
  if (nodeIndex === 0) {
    head = head.next;
    return head;
  }

  // loop through our list until we reach our nodeIndex
  cur = head;
  for (let i = 0; i < nodeIndex; i++) {
    // The node before the one we want to remove
    if (i + 1 === nodeIndex) {
      if (cur) {
        cur.next = cur?.next?.next || null;
        return head;
      }
    }
    cur = cur?.next || null;
  }

  return null;
}
