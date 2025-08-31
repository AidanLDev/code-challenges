interface ListNode {
  val: number;
  next?: ListNode | null;
}

export function mergeLists(list1: ListNode, list2: ListNode) {
  if (!list1) return list2;
  if (!list2) return list1;

  let dummy: ListNode = { val: 0, next: null };
  let tail = dummy;

  let curList1 = list1;
  let curList2 = list2;

  while (curList1 && curList2) {
    if (curList1.val < curList2.val) {
      tail.next = curList1;
      curList1 = curList1.next!;
    } else {
      tail.next = curList2;
      curList2 = curList2.next!;
    }
    tail = tail.next;
  }

  tail.next = curList1 ? curList1 : curList2;

  return dummy.next;
}
