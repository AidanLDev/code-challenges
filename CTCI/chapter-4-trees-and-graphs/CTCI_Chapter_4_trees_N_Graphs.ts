export interface TreeNode {
  value: number | string;
  left?: TreeNode;
  right?: TreeNode;
}

export interface Vertex {
  value: number | string;
  edges: Vertex[];
}

// - 4.1: Implement a function to check if a tree is balanced. For the purpose of this questin, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one
export function isBalanced(root: TreeNode): boolean {
  let longestBranch = -Infinity;
  let shortestBranch = Infinity;
  function traverse(node: TreeNode, curDepth = 0) {
    if (!node.left && !node.right) {
      if (curDepth > longestBranch) longestBranch = curDepth;
      if (curDepth < shortestBranch) shortestBranch = curDepth;
      return;
    }
    if (node.left) {
      traverse(node.left, curDepth + 1);
    }
    if (node.right) {
      traverse(node.right, curDepth + 1);
    }
  }
  traverse(root);
  return longestBranch <= shortestBranch + 2; // If there is a difference of more than +2 between the longest and shortest branch, the tree is unbalanced
}

// - 4.2: Given a directed graph, design an algorithm to find out wheather there is a route between two nodes.
export function isRouteBetweenVertexes(start: Vertex, end: Vertex): boolean {
  if (start === end) return true;

  const visited = new Set<Vertex>();
  const queue: Vertex[] = [start];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current === end) return true;
    visited.add(current);

    for (const neighbor of current.edges) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
  return false;
}

// - 4.3: Given a sorted (increasing order) array, write an algorithm to created a binary tree with minimal height

// - 4.4: Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth (i.e. if you have a tree with depth D, you'll have D linked lists)

// - 4.5: Write an algorithm to find the 'next' node (i.e. in order sucessor) of a given node in a binary search tree where each node has a link to its parent

// - 4.6: Design an algorithm and write code to find the first common ancesotor of two nodes in a binary tree. Avoid storing additional nodes in data structure. NoTE: this is not necessarily a binary search tree

// - 4.7: You have two very large binary trees: T1, with millions of nodes, and T2, with hundreds of nodes. Create an algorithm to decide if T2 is a subtree of T1.

// - 4.8: You are given a binary tree in which each node contains a value. Design an algorithm to print all paths which sum up to that value. Note that it can be any path in the tree - it does not have to start at the root.
