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

class BSTIterator {
  private orderedTree: number[];
  private idx: number;
  constructor(root: TreeNode | null) {
    this.orderedTree = [];
    this.idx = 0;
    if (!root) {
      return;
    }
    const walk = (curNode: TreeNode | null) => {
      if (!curNode) {
        return;
      }
      walk(curNode.left);
      this.orderedTree.push(curNode.val);
      walk(curNode.right);
      return;
    };
    walk(root);
  }

  next(): number {
    if (this.idx <= this.orderedTree.length - 1) {
      const res = this.orderedTree[this.idx];
      this.idx++;
      return res;
    }
    this.idx++;
    return -1;
  }

  hasNext(): boolean {
    if (this.idx <= this.orderedTree.length - 1) {
      return true;
    }
    return false;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
