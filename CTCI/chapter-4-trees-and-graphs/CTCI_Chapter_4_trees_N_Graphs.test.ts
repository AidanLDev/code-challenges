import { describe, it, expect } from "@jest/globals";
import { isBalanced, TreeNode } from "./CTCI_Chapter_4_trees_N_Graphs";

describe("CTCI 4.1 Check if a tree is balanced", () => {
  it("Correctly identifies a balanced tree", () => {
    const tree: TreeNode = {
      value: 10,
    };
    tree.left = { value: 8 };
    tree.right = { value: 12 };
    tree.left.left = { value: 4 };
    tree.left.right = { value: 6 };
    tree.right.left = { value: 11 };
    tree.right.right = { value: 18 };

    expect(isBalanced(tree)).toBe(true);
  });

  it("Correctly identifies an in-balanced tree", () => {
    const tree: TreeNode = { value: 10 };
    tree.left = { value: 8 };
    tree.right = { value: 12 };
    tree.left.left = { value: 4 };
    tree.left.right = { value: 6 };
    tree.left.left.left = { value: 2 };
    tree.left.left.left.left = { value: 1 };

    expect(isBalanced(tree)).toBe(false);
  });
});
