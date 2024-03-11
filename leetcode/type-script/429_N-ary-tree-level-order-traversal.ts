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

function levelOrder(root: NArrayTreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const result: number[][] = [];
  let queue: (NArrayTreeNode | null)[] = [root];

  while (queue.length > 0) {
    let queueLength = queue.length;
    let level: number[] = [];

    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        if (node?.children) {
          for (let i = 0; i < node?.children.length; i++) {
            // Push every child from the current node into the queue
            queue.push(node.children[i]);
          }
        }
      }
    }
    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
}
