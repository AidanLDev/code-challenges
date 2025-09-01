interface INode {
  val: number;
  next?: INode | null;
}

export function generateTestList() {
  let dummy: INode = { val: 0, next: null };
  let tail = dummy;
  for (let i = 1; i < 6; i++) {
    tail.next = { val: i, next: null };
    tail = tail.next;
  }
  return dummy.next;
}

export function printList(head: INode) {
  let list = "";
  let cur = head;
  while (cur) {
    list += `${cur.val} -> `;
    cur = cur.next!;
  }
  console.log(list);
}
