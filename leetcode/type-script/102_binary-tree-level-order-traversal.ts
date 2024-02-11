import { TreeNode } from '../../interfaces/interfaces';

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const result: number[][] = [];
  let queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    let queueLength = queue.length;
    let level: number[] = [];

    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();

      if (node) {
        level.push(node.val);

        if (node.left !== null) {
          queue.push(node.left);
        }

        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
}
