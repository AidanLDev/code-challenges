interface Node {
  val: number;
  next: Node | null;
  random: Node | null;
}

function copyRandomList(head: Node | null): Node | null {
  if (!head) {
    return null;
  }

  let nodeMap = new Map();
  let node: Node | null = head;

  // First pass: create all new nodes and store them in a Map
  while (node) {
    nodeMap.set(node, new Node(node.val)); // Create a new node for each of the original nodes
    node = node.next; // Iterate
  }

  node = head;

  // Second pass: assign next and random pointers
  while (node) {
    nodeMap.get(node).next = node.next ? nodeMap.get(node.next) : null;
    nodeMap.get(node).random = node.random ? nodeMap.get(node.random) : null;
    node = node.next;
  }

  return nodeMap.get(head);
}
