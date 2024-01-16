import { ListNode } from '../../interfaces/interfaces';

// First solution O(M * N) (where M = listB and N ListA)
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let listANode: ListNode | null = headA;
  let listBNode: ListNode | null = headB;

  // Can't have an intersection if we have no list
  if (listANode === null || listBNode === null) {
    return null;
  }

  while (listBNode !== null) {
    // Reset the listANode pointer so we check the entire A list against the remaining B list items
    listANode = headA;
    while (listANode !== null) {
      if (listANode === listBNode) {
        return listANode;
      }
      listANode = listANode.next;
    }
    listBNode = listBNode.next;
  }
  // No list was return so must not contain another
  return null;
}

function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
      return null;
  }

  let nodeA: ListNode | null = headA;
  let nodeB: ListNode | null = headB;

  // Traverse both lists. If either list is exhausted, continue from the start of the other list.
  // If there is an intersection, the pointers will meet at the intersection node after at most 2 full traversals.
  // If there is no intersection, the pointers will both become null at the same time.
  while (nodeA !== nodeB) {
      nodeA = nodeA === null ? headB : nodeA.next;
      nodeB = nodeB === null ? headA : nodeB.next;
  }

  // Either nodeA and nodeB are both pointing to the intersection node, or they are both null.
  return nodeA;
}
