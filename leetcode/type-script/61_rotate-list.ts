import { ListNode } from '../../interfaces/interfaces';

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  // Calculate the length of the list
  let listLength = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    listLength++;
  }

  // calculate the rotation
  k = k % listLength;

  // No rotation needed
  if (k === 0) {
    return head;
  }

  let newTail: ListNode | null = head;
  for (let i = 0; i < listLength - k - 1; i++) {
    newTail = newTail?.next || null;
  }

  let newHead = newTail?.next || null;

  // Break the old list and form the new list
  if (newTail !== null) {
    newTail.next = null;
  }

  tail.next = head;

  return newHead;
}
