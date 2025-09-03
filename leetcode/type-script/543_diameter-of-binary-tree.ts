import { TreeNode } from "../../interfaces/interfaces";

export function binaryTreeDiameter(root: TreeNode | null): number {
  if (!root) return 0;

  let curMax = 0;

  function traverse(curNode: TreeNode | null): number {
    if (!curNode) return -1;
    let left = traverse(curNode.left || null);
    let right = traverse(curNode.right || null);
    curMax = Math.max(left + right + 2, curMax);
    return 1 + Math.max(left, right);
  }
  traverse(root);
  return curMax;
}
