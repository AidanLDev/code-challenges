import { TreeNode } from "../../interfaces/interfaces";

export function maxSumPath(root: TreeNode | null): number {
  if (!root) return 0;
  let curMax = -Infinity;

  function traverse(curNode: TreeNode | null): number {
    if (!curNode) return 0;
    const left = Math.max(0, traverse(curNode?.left || null));
    const right = Math.max(0, traverse(curNode?.right || null));
    curMax = Math.max(curMax, curNode.val + left + right);
    return curNode.val + Math.max(left, right);
  }
  traverse(root);
  return curMax;
}
