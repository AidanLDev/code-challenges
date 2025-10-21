import { MyMinHeap } from "../../DSA/data-sctructures/minHeap";

function networkDelayTime(times: number[][], n: number, k: number): number {
  const adj: Map<number, [number, number][]> = new Map();
  for (const [u, v, w] of times) {
    if (!adj.has(u)) adj.set(u, []);
    adj.get(u)!.push([v, w]);
  }

  const dist = new Array<number>(n + 1).fill(Infinity);
  dist[k] = 0;

  const heap = new MyMinHeap<[number, number]>((a, b) => a[0] - b[0]);
  heap.push([0, k]);

  while (heap.size() > 0) {
    const [time, node] = heap.pop()!;
    if (time > dist[node]) continue;
    const neigh = adj.get(node) ?? [];
    for (const [nei, w] of neigh) {
      const cand = time + w;
      if (cand < dist[nei]) {
        dist[nei] = cand;
        heap.push([cand, nei]);
      }
    }
  }

  let ans = -Infinity;
  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) return -1;
    ans = Math.max(ans, dist[i]);
  }
  return ans;
}
const networkDelayExample1 = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];
const networkDelayK1 = 2;
const networkDelayN1 = 4;
const networkDelayRes1 = networkDelayTime(
  networkDelayExample1,
  networkDelayN1,
  networkDelayK1
);
