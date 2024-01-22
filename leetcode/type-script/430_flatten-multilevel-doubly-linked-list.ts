interface Node {
  val: number;
  next: Node | null;
  prev: Node | null;
  child: Node | null;
}

function flatten(head: Node | null): Node | null {
  if (!head) {
    return head;
  }

  let cur: Node | null = head;
  while (cur) {
    if (cur.child !== null) {
      let restOfTheList = cur.next; // store the rest of the list before updating it to have the child list
      cur.next = cur.child;
      cur.child.prev = cur; // set the child's prev to cur
      cur.child = null;

      // find the end of the child list
      let endOfChildList = cur.next;
      while (endOfChildList.next !== null) {
        endOfChildList = endOfChildList.next;
      }

      // connect the end of the child list to the rest of the original list
      endOfChildList.next = restOfTheList;
      if (restOfTheList !== null) {
        restOfTheList.prev = endOfChildList;
      }
    }
    cur = cur.next;
  }
  // return the flattened linkedList
  return head;
}
