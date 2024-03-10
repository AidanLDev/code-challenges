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

let queue: NArrayTreeNode[] = [];

function walk(treeNode: NArrayTreeNode, result: number[][]):number[][] {
  if (queue.length === 0) {
    return [[]]
  }

  /*
    For each node we're on, push it's children into a queue
  */
 result.push(treeNode.val);
 queue.push(treeNode.children)
}

function levelOrder(root: NArrayTreeNode | null): number[][] {
  if (!root) {
    return [[]]
  }

  let result: number[][] = []
  result.push([root.val]);
  queue.push(root);

  return walk(root, result)

}
