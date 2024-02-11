/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { TreeNode } from '../../interfaces/interfaces';
function isBalanced(root: TreeNode | null): boolean {
  function dfs(root: TreeNode | null): any[] {
    if (!root) {
      return [true, 0];
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    let balance = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    return [balance, 1 + Math.max(left[1], right[1])];
  }
  return dfs(root)[0];
}
