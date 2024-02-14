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

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let curMax = 1;
  function traverse(tree: TreeNode | null, curDepth = 1) {
    // Keep track of curDepth and initialise it to 1 as root is 1
    if (!tree) {
      return;
    }
    if (tree.left == null && tree.right == null) {
      // At a leaf node, check if curDepth is smaller than curMax
      // Check if it's 1 because that means it's just the root and we need to add the first leaf
      if (curMax === 1 || curDepth < curMax) {
        // Only set curMax if it's less than the curDepth to get the min
        curMax = curDepth;
      }
    }
    traverse(tree.left, curDepth + 1);
    traverse(tree.right, curDepth + 1);
  }
  traverse(root);
  return curMax;
}
