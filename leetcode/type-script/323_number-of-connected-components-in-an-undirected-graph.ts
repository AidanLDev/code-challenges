/**
     * @description There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.

    The nodes are numbered from 0 to n - 1.

    Return the total number of connected components in that graph.

    Example 1:
    Input:
    n=3
    edges=[[0,1], [0,2]]

    Output:
    1

    Example 2:
    Input:
    n=6
    edges=[[0,1], [1,2], [2,3], [4,5]]

    Output:
    2

     * @param {number} n number of nodes in the graph
     * @param {number[][]} edges edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph
     * @returns {number} The total number of connected components in the graph
     */
function countComponents(n: number, edges: number[][]): number {
  let total = 0;
  const adjList: number[][] = Array.from({ length: n }, () => []);
  for (const [ai, bi] of edges) {
    adjList[ai].push(bi);
    adjList[bi].push(ai);
  }

  const visited: boolean[] = Array(n).fill(false);

  function dfs(curNode: number) {
    if (visited[curNode]) return;
    visited[curNode] = true;

    for (const nextNode of adjList[curNode]) {
      if (!visited[nextNode]) dfs(nextNode);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      total++;
    }
  }

  return total;
}

function countComponentsUnionFind(n: number, edges: number[][]): number {
  const parent: number[] = [];
  for (let i = 0; i < n; i++) {
    parent.push(i);
  }
  const rank: number[] = Array(n).fill(1);

  function find(x: number): number {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(n1: number, n2: number) {
    let p1 = find(n1);
    let p2 = find(n2);

    if (p1 === p2) return 0;
    if (rank[p2] > rank[p1]) {
      parent[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      parent[p2] = p1;
      rank[p1] += rank[p2];
    }
    return 1;
  }

  let res = n;
  for (const [ai, bi] of edges) {
    res -= union(ai, bi);
  }

  return res;
}

let countComponentsN1 = 3;
let countComponentsEdges1 = [
  [0, 1],
  [0, 2],
];
let countComponentsRes1 = countComponentsUnionFind(
  countComponentsN1,
  countComponentsEdges1
);

let countComponentsN2 = 6;
let countCOmponentsEdges2 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 5],
];
let countComponentsRes2 = countComponentsUnionFind(
  countComponentsN2,
  countCOmponentsEdges2
);

console.log("res1: ", countComponentsRes1);
console.log("res2: ", countComponentsRes2);
