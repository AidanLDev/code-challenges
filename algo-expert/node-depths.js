function nodeDepths(root) {
  // Write your code here.
  /*
    Write a recursive funcction (while left !== null && right !== null)
    iterate down the tree
      
  */
  let sumOfDepths = 0;
  let stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    let curNode = stack.pop();
    let node = curNode.node;
    let depth = curNode.depth;
    if (!node) {
      continue;
    }
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
