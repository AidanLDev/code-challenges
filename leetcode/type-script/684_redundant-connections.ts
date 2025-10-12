/*
Topics
premium lock icon
Companies
In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

*/

function findRedundantConnection(edges: number[][]): number[] {
  const parent: number[] = [];

  for (let i = 0; i <= edges.length; i++) {
    parent[i] = i;
  }

  function find(x: number): number {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x: number, y: number): boolean {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return false; // Already connected

    parent[rootX] = rootY;
    return true;
  }

  for (const [u, v] of edges) {
    if (!union(u, v)) {
      return [u, v];
    }
  }
  return [];
}

/*
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

*/
