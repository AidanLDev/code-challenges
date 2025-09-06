import { TreeNode } from "../../interfaces/interfaces";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null) {
  let isValid = false;

  if (!root && !subRoot) return true;
  if (root && !subRoot) return false;

  function isValidSubtree(
    curRoot: TreeNode | null,
    curSubRoot: TreeNode | null
  ): boolean {
    if (!curRoot && !curSubRoot) return true;
    if (!curRoot && curSubRoot) return false;
    if (!curSubRoot && curRoot) return false;
    if (curSubRoot?.val === curRoot?.val) {
      let isLeftValid = isValidSubtree(
        curRoot?.left || null,
        curSubRoot?.left || null
      );
      let isRightValid = isValidSubtree(
        curRoot?.right || null,
        curSubRoot?.right || null
      );
      return isLeftValid && isRightValid;
    } else {
      return false;
    }
  }

  function traverse(curNode: TreeNode | null) {
    if (!curNode) return;
    if (curNode.val === subRoot?.val && !isValid) {
      isValid = isValidSubtree(curNode, subRoot);
    }
    traverse(curNode.left || null);
    traverse(curNode.right || null);
  }

  traverse(root);

  return isValid;
}
