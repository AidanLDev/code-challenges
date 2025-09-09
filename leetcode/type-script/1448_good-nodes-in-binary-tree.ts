import { TreeNode } from "../../interfaces/interfaces";

/** @description Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree. */
function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;
  let goodNodes = 1;
  function traverse(curNode: TreeNode | null, curPath: number[]) {
    
  }
  return goodNodes;
}
