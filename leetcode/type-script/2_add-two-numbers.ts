interface ListNode {
  val: number | null;
  next: ListNode | null;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyHead: ListNode = { val: 0, next: null };
  let p = l1,
    q = l2,
    curr = dummyHead;
  let carry = 0;
  while (p != null || q != null) {
    let x = p != null ? p.val : 0;
    let y = q != null ? q.val : 0;
    let sum = 0;

    if (x !== null && y !== null) {
      sum = carry + x + y;
    }

    carry = Math.floor(sum / 10);
    curr.next = { val: sum % 10, next: null };
    curr = curr.next;
    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }
  if (carry > 0) {
    curr.next = { val: carry, next: null };
  }
  return dummyHead.next;
}
