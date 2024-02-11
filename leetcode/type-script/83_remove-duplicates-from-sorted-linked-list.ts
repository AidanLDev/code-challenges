import { ListNode } from '../../interfaces/interfaces';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let listVals: number[] = [];
  let cur = head;
  let prev: ListNode | null = null;

  while (cur) {
    if (listVals.includes(cur.val)) {
      if (prev) {
        prev.next = cur.next;
      }
    } else {
      listVals.push(cur.val); // add current val to listVals
      prev = cur; // set prev to be the current node
    }
    cur = cur.next; // traverse the list
  }
  return head;
}
