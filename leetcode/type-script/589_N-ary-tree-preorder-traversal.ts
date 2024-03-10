/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

import { NArrayTreeNode } from '../../interfaces/interfaces';

function walk(treeNode: NArrayTreeNode, result: number[]): number[] {
  if (!treeNode) {
    return [];
  }
  result.push(treeNode.val);
  for (let i = 0; i < treeNode.children.length; i++) {
    walk(treeNode.children[i], result);
  }
  return result;
}

function preorder(root: NArrayTreeNode | null): number[] {
  if (!root) {
    return [];
  }
  return walk(root, []);
}
