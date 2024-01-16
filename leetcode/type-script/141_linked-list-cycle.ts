/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from '../../interfaces/interfaces';

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  // Loop until slow catches up with fast
  while (slow !== fast) {
    // IF we run out if nodes, return false as it can't be a loop
    if (!fast || !fast.next) {
      return false;
    }

    slow = slow?.next || null; // jump1
    fast = fast.next.next; // jump2
  }
  return true;
}

/*
  ## Explanation ##
  In this code, slow and fast start at the head of the list. If there is a cycle, the fast pointer will eventually catch up to the slow pointer (like a faster runner on a track would catch up to a slower runner). If there isn’t a cycle, the fast runner will reach the end of the list, and we can conclude the list is cycle-free.

  This solution is efficient and uses O(1) memory and a time complexity of O(n), where n is the number of nodes in the list. This is because in the worst-case scenario, we have to traverse all the nodes in the list. The space complexity is O(1), as we’re only using a constant amount of space to store the slow and fast pointers.
*/
