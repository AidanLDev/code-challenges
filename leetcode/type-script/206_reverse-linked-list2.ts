function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let cur = head;
  let next = cur?.next;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
