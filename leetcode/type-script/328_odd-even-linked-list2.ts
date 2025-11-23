/*
328. Odd Even Linked List
Solved
Medium
Topics
premium lock icon
Companies
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let odd = head;
  let even = head?.next || null;
  const evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd?.next || null;
    even.next = odd.next;
    even = even?.next || null;
  }
  if (odd) odd.next = evenHead;
  return head;
}
