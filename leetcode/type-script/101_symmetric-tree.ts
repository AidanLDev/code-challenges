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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return symetricCheck(root.left, root.right);
}

function symetricCheck(left: TreeNode | null, right: TreeNode | null) {
  if (!left && !right) {
    return true;
  }
  if (left == null || right == null) {
    return false;
  }
  if (left.val !== right.val) {
    return false;
  }
  return (
    symetricCheck(left.left, right.right) &&
    symetricCheck(right.left, left.right)
  );
}
