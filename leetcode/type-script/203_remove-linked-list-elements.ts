import { ListNode } from "../../interfaces/interfaces";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // Create a new start for the list
  let start: ListNode = { val: 0, next: null }; // This is used to handle the case of if the head === val
  start.next = head;

  let prev: ListNode | null = start;
  let cur: ListNode | null = head;
  while (cur) {
      if (cur.val === val) {
          prev.next = cur.next; // set to cur.next because we're already ahead of prev
      } else {
          prev = cur;
      }
      cur = cur.next;
  }
  return start.next;
};