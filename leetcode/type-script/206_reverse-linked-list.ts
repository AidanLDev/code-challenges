import { ListNode } from "../../interfaces/interfaces";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  let next: ListNode | null = null;

  while (cur !== null) {
      next = cur.next; // temporarily store the OLD next node before it's overwritten
      cur.next = prev; // reverse the link
      prev = cur; // move prev and cur one step forward
      cur = next;
  }

  return prev; // at the end of the loop, prev will be the new head of the reversed list
};
