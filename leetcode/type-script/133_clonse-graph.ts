/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */

class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const map = new Map<_Node, _Node>();
  const queue: _Node[] = [];

  const cloneRoot = new _Node(node.val, []);
  map.set(node, cloneRoot);
  queue.push(node);

  while (queue.length) {
    const cur = queue.shift()!;
    const curClone = map.get(cur)!;

    for (const nei of cur.neighbors) {
      if (!map.has(nei)) {
        map.set(nei, new _Node(nei.val, []));
        queue.push(nei);
      }
      curClone.neighbors.push(map.get(nei)!);
    }
  }

  return cloneRoot;
}
