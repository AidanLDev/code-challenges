import { ListNode } from '../../interfaces/interfaces';

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  // Create a copy of the list
  let copyHead: ListNode | null = new ListNode(head.val);
  let node: ListNode | null = copyHead;
  let cur: ListNode | null = head.next;

  while (cur !== null) {
    node.next = new ListNode(cur.val);
    node = node.next;
    cur = cur.next;
  }

  // Reverse the list
  let prev: ListNode | null = null;
  cur = head;

  while (cur !== null) {
    const next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  // Compare the reversed list with the copied list
  let node1: ListNode | null = copyHead;
  let node2: ListNode | null = prev;

  while (node1 !== null && node2 !== null) {
    if (node1.val !== node2.val) {
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
  }

  return true;
}
