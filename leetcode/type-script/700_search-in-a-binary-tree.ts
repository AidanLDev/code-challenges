import { TreeNode } from '../../interfaces/interfaces';
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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let cur = root;
  while (cur) {
    if (cur.val === val) {
      return cur;
    }
    if (cur.val > val) {
      // current tree node is too big, go left
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }
  return cur;
}
