import { ListNode } from '../../interfaces/interfaces';

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) {
      return null;
  }
  
  let odd = head;
  let even = head.next;
  let evenHead = even; // To remember the start of even indexed nodes
  
  while (even !== null && even.next !== null) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
  }
  
  // Connecting end of odd indexed nodes to the start of even indexed nodes
  odd.next = evenHead;
  
  return head;
};
