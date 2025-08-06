import { describe, it, expect } from "@jest/globals";
import {
  isBalanced,
  TreeNode,
  isRouteBetweenVertexes,
  Vertex,
  createTreeFromArray,
  createLinkedListsFromTree,
} from "./CTCI_Chapter_4_trees_N_Graphs";

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

describe("CTCI 4.2 isRouteBetweenVertexes", () => {
  function makeVertex(value: number | string): Vertex {
    return { value, edges: [] };
  }

  it("returns true when a direct route exists", () => {
    const a = makeVertex("A");
    const b = makeVertex("B");
    a.edges.push(b);
    expect(isRouteBetweenVertexes(a, b)).toBe(true);
  });

  it("returns true when an indirect route exists", () => {
    const a = makeVertex("A");
    const b = makeVertex("B");
    const c = makeVertex("C");
    a.edges.push(c);
    c.edges.push(b);
    expect(isRouteBetweenVertexes(a, b)).toBe(true);
  });

  it("returns false when no route exists", () => {
    const a = makeVertex("A");
    const b = makeVertex("B");
    expect(isRouteBetweenVertexes(a, b)).toBe(false);
  });

  it("returns true for a cycle (start === end)", () => {
    const a = makeVertex("A");
    a.edges.push(a);
    expect(isRouteBetweenVertexes(a, a)).toBe(true);
  });

  it("returns true for a cycle (indirect)", () => {
    const a = makeVertex("A");
    const b = makeVertex("B");
    const c = makeVertex("C");
    a.edges.push(b);
    b.edges.push(c);
    c.edges.push(a);
    expect(isRouteBetweenVertexes(a, c)).toBe(true);
    expect(isRouteBetweenVertexes(c, b)).toBe(true);
  });

  it("returns false for disconnected graphs", () => {
    const a = makeVertex("A");
    const b = makeVertex("B");
    const c = makeVertex("C");
    // No edges
    expect(isRouteBetweenVertexes(a, b)).toBe(false);
    expect(isRouteBetweenVertexes(b, c)).toBe(false);
  });
});

describe("CTCI 4.3 createTreeFromArray", () => {
  it("returns undefined for an empty array", () => {
    expect(createTreeFromArray([])).toBeUndefined();
  });

  it("creates a single node tree for a one-element array", () => {
    const tree = createTreeFromArray([42]);
    expect(tree).toEqual({ value: 42, left: undefined, right: undefined });
  });

  it("creates a minimal height BST for an odd-length array", () => {
    const tree = createTreeFromArray([1, 2, 3]);
    expect(tree).toEqual({
      value: 2,
      left: { value: 1, left: undefined, right: undefined },
      right: { value: 3, left: undefined, right: undefined },
    });
  });

  it("creates a minimal height BST for an even-length array", () => {
    const tree = createTreeFromArray([1, 2, 3, 4]);
    expect(tree).toEqual({
      value: 3,
      left: {
        value: 2,
        left: { value: 1, left: undefined, right: undefined },
        right: undefined,
      },
      right: { value: 4, left: undefined, right: undefined },
    });
  });

  it("creates a correct BST for a longer array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const tree = createTreeFromArray(arr);
    expect(tree).toEqual({
      value: 4,
      left: {
        value: 2,
        left: { value: 1, left: undefined, right: undefined },
        right: { value: 3, left: undefined, right: undefined },
      },
      right: {
        value: 6,
        left: { value: 5, left: undefined, right: undefined },
        right: { value: 7, left: undefined, right: undefined },
      },
    });
  });
});

// --- 4.4 createLinkedListsFromTree tests ---
describe("CTCI 4.4 createLinkedListsFromTree", () => {
  it("returns an empty array for an empty tree", () => {
    expect(createLinkedListsFromTree(undefined as any)).toEqual([]);
  });

  it("returns a single list for a single node tree", () => {
    const tree = { value: 1 };
    const lists = createLinkedListsFromTree(tree);
    expect(lists.length).toBe(1);
    expect(lists[0][0].value).toBe(1);
    expect(lists[0][0].next).toBeUndefined();
  });

  it("returns correct lists for a balanced BST", () => {
    // Tree:      2
    //          / \
    //         1   3
    const tree = createTreeFromArray([1, 2, 3])!;
    const lists = createLinkedListsFromTree(tree);
    expect(lists.length).toBe(2);
    // Level 0
    expect(lists[0][0].value).toBe(2);
    expect(lists[0][0].next).toBeUndefined();
    // Level 1
    expect(lists[1][0].value).toBe(1);
    expect(lists[1][1].value).toBe(3);
    expect(lists[1][0].next).toBe(lists[1][1]);
    expect(lists[1][1].next).toBeUndefined();
  });

  it("returns correct lists for a larger BST", () => {
    // Tree from [1,2,3,4,5,6,7]
    const tree = createTreeFromArray([1, 2, 3, 4, 5, 6, 7])!;
    const lists = createLinkedListsFromTree(tree);
    expect(lists.length).toBe(3);
    // Level 0: 4
    expect(lists[0][0].value).toBe(4);
    // Level 1: 2, 6
    expect(lists[1][0].value).toBe(2);
    expect(lists[1][1].value).toBe(6);
    expect(lists[1][0].next).toBe(lists[1][1]);
    expect(lists[1][1].next).toBeUndefined();
    // Level 2: 1, 3, 5, 7
    expect(lists[2][0].value).toBe(1);
    expect(lists[2][1].value).toBe(3);
    expect(lists[2][2].value).toBe(5);
    expect(lists[2][3].value).toBe(7);
    expect(lists[2][0].next).toBe(lists[2][1]);
    expect(lists[2][1].next).toBe(lists[2][2]);
    expect(lists[2][2].next).toBe(lists[2][3]);
    expect(lists[2][3].next).toBeUndefined();
  });
});
