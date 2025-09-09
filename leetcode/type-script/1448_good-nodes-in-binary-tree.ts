import { TreeNode } from "../../interfaces/interfaces";

/** @description Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree. */
function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;
  function traverse(curNode: TreeNode | null, maxSoFar: number): number {
    if (!curNode) return 0;
    if (!root) return 0;
    let good = curNode.val >= maxSoFar ? 1 : 0;
    let newMax = Math.max(maxSoFar, curNode.val);
    return (
      good +
      traverse(curNode.left || null, newMax) +
      traverse(curNode.right || null, newMax)
    );
  }
  return traverse(root, root.val);
}
