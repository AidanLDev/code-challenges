import { ListNode } from "../../interfaces/interfaces";

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let odd: ListNode = head;
  let even: ListNode | null = head.next;
  const evenHead: ListNode | null = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next!;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}
