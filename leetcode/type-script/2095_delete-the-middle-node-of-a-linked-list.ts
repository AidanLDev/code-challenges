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

function deleteMiddle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  let prev: ListNode | null = null;
  if (!head?.next) return null;
  while (fast && fast?.next) {
    prev = slow;
    slow = slow?.next || null;
    fast = fast?.next?.next || null;
  }
  if (prev) {
    prev.next = slow?.next || null;
  }
  return head;
}
