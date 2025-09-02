import { TreeNode } from "../../interfaces/interfaces";

export function generateTree(nodes: number[]): TreeNode {
  function createTreeNode(num: number): TreeNode {
    return { val: num, left: undefined, right: undefined };
  }

  const mid = Math.floor(nodes.length / 2);
  const root = createTreeNode(nodes[mid]);

  root.left = generateTree(nodes.slice(0, mid));
  root.right = generateTree(nodes.slice(mid + 1));

  return root;
}


