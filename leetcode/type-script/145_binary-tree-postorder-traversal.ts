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

function postorderTraversal(root: TreeNode | null): number[] {
  /*
      Traverse to the bottom before pushing anything
  */
  function traverse(tree: TreeNode | null, result: number[]): number[] {
    if (!tree) {
      return result;
    }

    result = traverse(tree.left, result);
    result = traverse(tree.right, result);
    result.push(tree.val);
    return result;
  }
  return traverse(root, []);
}
