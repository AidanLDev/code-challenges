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
  for (let i = 0; i < treeNode.children.length; i++) {
    walk(treeNode.children[i], result);
  }
  result.push(treeNode.val);
  return result;
}

function postorder(root: NArrayTreeNode | null): number[] {
  if (!root) {
    return [];
  }
  return walk(root, []);
}
