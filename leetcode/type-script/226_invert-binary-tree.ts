import { TreeNode } from "../../interfaces/interfaces";

export function invertTree(root: TreeNode): TreeNode {
  function invert(curNode?: TreeNode) {
    if (!curNode) return;
    let tempLeft = curNode.left;
    curNode.left = curNode.right;
    curNode.right = tempLeft;
    invert(curNode.left);
    invert(curNode.right);
  }
  invert(root);

  return root;
}
