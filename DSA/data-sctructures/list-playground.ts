interface ListNode {
  val: number;
  next: ListNode | null;
}

interface DoubleListNode {
  val: number;
  next: DoubleListNode | null;
  prev: DoubleListNode | null;
}

function createNode(val: number): ListNode {
  return {
    val,
    next: null,
  };
}

function createDoubleNode(
  val: number,
  curNode: DoubleListNode | null
): DoubleListNode {
  return {
    val,
    next: null,
    prev: curNode,
  };
}

function createList(elements: number[]): ListNode {
  const head = createNode(elements[0]);
  let cur = head;
  for (let i = 1; i < elements.length; i++) {
    cur.next = createNode(elements[i]);
    cur = cur.next!;
  }
  return head;
}

function createDoubleList(elements: number[]): DoubleListNode {
  const head = createDoubleNode(elements[0], null);
  let cur = head;
  for (let i = 1; i < elements.length; i++) {
    const newNode = createDoubleNode(elements[i], cur);
    cur.next = newNode;
    cur = cur.next;
  }
  return head;
}

function printList(list: ListNode | null): void {
  let cur = list;
  while (cur) {
    console.log(cur.val);
    cur = cur?.next || null;
  }
}

function printDoubleList(list: DoubleListNode | null): void {
  let cur = list;
  while (cur) {
    console.log({ val: cur.val, prev: cur?.prev?.val || null });
    cur = cur.next;
  }
}

const arrayOne = [1, 2, 3, 4, 5];
const listOne = createList(arrayOne);

function insertIntoSortedList(
  list: ListNode | null,
  val: number
): ListNode | null {
  const newNode = createNode(val);

  if (!list) return newNode;

  if (list.val === null || val <= list.val) {
    newNode.next = list;
    return newNode;
  }

  let cur = list;
  while (cur.next !== null && cur.next.val !== null && cur.next.val < val) {
    cur = cur.next;
  }

  newNode.next = cur.next;
  cur.next = newNode;

  return list;
}

function insertIntoDoubleList(
  list: DoubleListNode | null,
  val: number
): DoubleListNode | null {
  const newNode = createDoubleNode(val, null);
  if (!list) return newNode;

  if (val < list.val) {
    newNode.next = list;
    list.prev = newNode;
    return newNode;
  }

  let cur = list;
  while (cur.next && cur.next.val < val) {
    cur = cur.next;
  }

  newNode.next = cur.next;
  newNode.prev = cur;
  cur.next = newNode;

  if (newNode.next) {
    newNode.next.prev = newNode;
  }

  return list;
}

function deleteFromList(list: ListNode | null, val: number): ListNode | null {
  if (!list) return null;
  if (list.val === val) {
    list = list.next;
    return list;
  }

  let cur = list;
  while (cur?.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      return list;
    }
    cur = cur.next;
  }
  console.log("val not found in the list ");

  return list;
}

function reverseList(list: ListNode | null): ListNode | null {
  if (!list) return null;
  let cur: ListNode | null = list;
  let next: ListNode | null = null;
  let prev: ListNode | null = null;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

printList(listOne);
console.log("reversing list");
const reversedList = reverseList(listOne);
printList(reversedList);

export default {};
