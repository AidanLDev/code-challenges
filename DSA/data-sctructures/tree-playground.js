function buildBST() {
  // Create all nodes
  let root = { val: 5, left: null, right: null };
  let three = { val: 3, left: null, right: null };
  let one = { val: 1, left: null, right: null };
  let two = { val: 2, left: null, right: null };
  let four = { val: 4, left: null, right: null };
  let eight = { val: 8, left: null, right: null };
  let seven = { val: 7, left: null, right: null };
  let nine = { val: 9, left: null, right: null };

  // Connect left subtree
  root.left = three;
  three.left = one;
  one.right = two;
  three.right = four;

  // Connect right subtree
  root.right = eight;
  eight.left = seven;
  eight.right = nine;

  return root;
}

const bst = buildBST();

function preOrderTraversal(root) {
  function traverse(curNode) {
    if (!curNode) return;
    console.log(curNode.val);
    traverse(curNode?.left);
    traverse(curNode?.right);
  }
  traverse(root);
}
function inOrderTraversal(root) {
  function traverse(curNode) {
    if (!curNode) return;
    traverse(curNode?.left);
    console.log(curNode.val);
    traverse(curNode?.right);
  }
  traverse(root);
}
function postOrderTraversal(root) {
  function traverse(curNode) {
    if (!curNode) return;
    traverse(curNode?.left);
    traverse(curNode?.right);
    console.log(curNode.val);
  }
  traverse(root);
}

console.log("pre order bst");
preOrderTraversal(bst);
console.log("in order bst");
inOrderTraversal(bst);
console.log("post order bst");
postOrderTraversal(bst);
