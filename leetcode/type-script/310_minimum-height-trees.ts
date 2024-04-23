function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) return [0];
  let adj = Array.from({ length: n }, () => []);
  let degree = Array(n).fill(0);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
    degree[u]++;
    degree[v]++;
  }
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) leaves.push(i);
  }
  while (n > 2) {
    n -= leaves.length;
    let newLeaves = [];
    for (let leaf of leaves) {
      for (let j of adj[leaf]) {
        degree[j]--;
        if (degree[j] === 1) newLeaves.push(j);
      }
    }
    leaves = newLeaves;
  }
  return leaves;
}
