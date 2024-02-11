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

function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  /*
      Start from the root
      go left, once !left go right
  */
  function traverse(tree: TreeNode | null) {
    if (!tree) {
      return;
    }
    result.push(tree.val);
    traverse(tree.left);
    traverse(tree.right);
  }
  traverse(root);
  return result;
}
