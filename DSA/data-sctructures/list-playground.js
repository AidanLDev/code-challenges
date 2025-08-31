function createList() {
  let dummy = { val: null, next: null };
  let tail = dummy;
  for (let i = 0; i < 5; i++) {
    tail.next = { val: i, next: null };
    tail = tail.next;
  }
  return dummy.next;
}

function printList(head) {
  let cur = head;
  while (cur) {
    console.log(`${cur.val} -> `);
    cur = cur.next;
  }
}

function creatingNewList(head) {
  let cur = head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = { val: 69, next: null };
  return head;
}

const list = createList();
console.log("list pre adding 69");
printList(list);
const newList = creatingNewList(list);
console.log("List post adding 69");
printList(newList);
