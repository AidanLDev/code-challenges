import { TreeNode } from '../../interfaces/interfaces';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return traverseTree(p, q);
}

function traverseTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
  if (tree1 == null && tree2 == null) {
    return true;
  }
  if (tree1 == null || tree2 == null) {
    console.log('One of the trees is missing a branch! return false');
    return false;
  }
  if (tree1.val !== tree2.val) {
    console.log('Trees are different, return false!');
    return false;
  }
  return (
    traverseTree(tree1.left, tree2.left) &&
    traverseTree(tree1.right, tree2.right)
  );
}
