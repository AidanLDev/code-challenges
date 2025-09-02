import { TreeNode } from "../../interfaces/interfaces";
import { invertTree } from "./226_invert-binary-tree";

describe("226_invert-binary-tree", () => {
  // [4,2,7,1,3,6,9]
  const generateNode = (num: number): TreeNode => ({
    val: num,
    left: undefined,
    right: undefined,
  });

  const root = generateNode(4);
  const two = generateNode(2);
  const seven = generateNode(7);

  const one = generateNode(1);
  const three = generateNode(3);
  const six = generateNode(6);
  const nine = generateNode(9);

  root.left = two;
  root.right = seven;

  two.left = one;
  two.right = three;

  seven.left = six;
  seven.right = nine;

  // Build reversedRoot
  const reversedRoot = generateNode(4);
  const revTwo = generateNode(2);
  const revSeven = generateNode(7);
  const revOne = generateNode(1);
  const revThree = generateNode(3);
  const revSix = generateNode(6);
  const revNine = generateNode(9);

  reversedRoot.left = revSeven;
  reversedRoot.right = revTwo;

  revSeven.left = revNine;
  revSeven.right = revSix;

  revTwo.left = revThree;
  revTwo.right = revOne;

  // Helper to compare trees
  function isSameTree(
    a: TreeNode | undefined,
    b: TreeNode | undefined
  ): boolean {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return (
      a.val === b.val &&
      isSameTree(a.left, b.left) &&
      isSameTree(a.right, b.right)
    );
  }

  it("inverts the tree correctly", () => {
    const result = invertTree(root);
    expect(isSameTree(result, reversedRoot)).toBe(true);
  });
});
