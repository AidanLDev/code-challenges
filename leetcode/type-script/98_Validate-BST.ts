import { TreeNode } from '../../interfaces/interfaces';

function isValidBST(
  root: TreeNode | null,
  min: number = -Infinity,
  max: number = Infinity
): boolean {
  if (root === null) return true;

  const isValid = min < root.val && root.val < max;

  if (!isValid) return false;

  const left = isValidBST(root.left, min, root.val);
  const right = isValidBST(root.right, root.val, max);

  return left && right;
}
