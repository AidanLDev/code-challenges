import { TreeNode } from "../../interfaces/interfaces";

export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const res: number[] = [root.val];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const nextQueue: TreeNode[] = [];
    while (queue.length > 0) {
      const curNode = queue.shift();
      if (curNode?.left) nextQueue.push(curNode.left);
      if (curNode?.right) nextQueue.push(curNode.right);
    }
    queue.push(...nextQueue);
    if (nextQueue?.length > 0) res.push(nextQueue[nextQueue?.length - 1].val);
  }

  return res;
}
