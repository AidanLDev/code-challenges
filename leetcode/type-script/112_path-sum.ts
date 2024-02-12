import { TreeNode } from '../../interfaces/interfaces';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function traverse(node: TreeNode | null, sum: number): boolean {
    if (!node) {
      return false;
    }
    sum += node.val;
    // Check if we're at a leaf node and if the sum equals the targetSum
    if (!node.left && !node.right) {
      return sum === targetSum;
    }
    // Traverse the left and right subtrees
    return traverse(node.left, sum) || traverse(node.right, sum);
  }
  return traverse(root, 0);
}
