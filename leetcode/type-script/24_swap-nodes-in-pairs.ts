import { ListNode } from '../../interfaces/interfaces';

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;
  while (cur.next !== null && cur.next.next !== null) {
    let firstNode = cur.next;
    let secondNode = cur.next.next;
    firstNode.next = secondNode.next;
    cur.next = secondNode;
    cur.next.next = firstNode;
    cur = cur.next.next;
  }
  return dummy.next;
}
