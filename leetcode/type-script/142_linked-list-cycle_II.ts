import { ListNode } from '../../interfaces/interfaces';

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // Step 1: Determine if there is a cycle
  while (fast !== null && fast.next !== null) {
    slow = slow?.next || null;
    fast = fast.next.next;

    // Cycle detected
    if (slow === fast) {
      break;
    }
  }

  // No cycle detected
  if (fast === null || fast.next === null) {
    return null;
  }

  // Step 2: Find the start of the cycle
  while (slow !== fast) {
    slow = slow?.next || null;
    fast = fast?.next || null;
  }
  slow = head;

  return slow;
}
