import { describe, it, expect } from "@jest/globals";
import {
  isBalanced,
  TreeNode,
  isRouteBetweenVertexes,
  Vertex,
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
