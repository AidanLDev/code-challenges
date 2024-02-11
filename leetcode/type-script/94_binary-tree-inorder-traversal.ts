import { TreeNode } from '../../interfaces/interfaces';

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  function inorder(root: TreeNode | null) {
    if (!root) {
      return;
    }
    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return result;
}
