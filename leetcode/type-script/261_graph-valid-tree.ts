/**
 * Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Example 1:

Input:
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

Output:
true
Example 2:

Input:
n = 5
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

Output:
false
 * @param n The number of nodes labelled 0 to n -1
 * @param edges 
 */
function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false;

  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const visited: boolean[] = Array(n).fill(false);

  function dfs(node: number, parent: number) {
    visited[node] = true;
    for (const nei of adj[node]) {
      if (nei === parent) continue;
      if (visited[nei]) return false;
      if (!dfs(nei, node)) return false;
    }
    return true;
  }
  if (!dfs(0, -1)) return false;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) return false;
  }

  return true;
}
