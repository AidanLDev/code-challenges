import { TreeNode } from "../../interfaces/interfaces";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const pStack: TreeNode[] = [];
  const qStack: TreeNode[] = [];
  if (!p || !q) return null;

  function traverse(
    curNode: TreeNode | null,
    target: TreeNode,
    stack: TreeNode[]
  ): boolean {
    if (!curNode) return false;
    stack.push(curNode);
    if (curNode.val === target.val) return true;
    if (traverse(curNode.left ?? null, target, stack)) return true;
    if (traverse(curNode.right ?? null, target, stack)) return true;
    stack.pop();
    return false;
  }

  traverse(root, p, pStack);
  traverse(root, q, qStack);

  let lca: TreeNode | null = null;
  const minLen = Math.min(pStack.length, qStack.length);
  for (let i = 0; i < minLen; i++) {
    if (pStack[i] !== qStack[i]) {
      return lca;
    }
    lca = pStack[i];
  }
  return lca;
}
