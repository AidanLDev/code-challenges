import { MyMaxHeap } from "../../DSA/data-sctructures/maxHeap";

function lastStoneWeight(stones: number[]): number {
  function smash(s1: number, s2: number): number | null {
    if (s1 === s2) return null;
    return Math.abs(s1 - s2);
  }
  stones.sort((a, b) => b - a);
  while (stones.length >= 1) {
    if (stones.length === 1) break;
    let s1 = stones.shift()!;
    let s2 = stones.shift()!;
    let res = smash(s1, s2);
    if (res) stones.push(res);
    stones.sort((a, b) => b - a);
  }
  return stones.length === 0 ? 0 : stones[0];
}

function lastStoneWeightWithHeap(stones: number[]): number {
  function smash(s1: number, s2: number): number | null {
    if (s1 === s2) return null;
    return Math.abs(s1 - s2);
  }
  const myHeap = new MyMaxHeap();
  for (const stone of stones) {
    myHeap.push(stone);
  }
  while (myHeap.size() >= 1) {
    if (myHeap.size() === 1) break;
    let s1 = myHeap.pop()!;
    let s2 = myHeap.pop()!;
    const res = smash(s1, s2);
    if (res) myHeap.push(res);
  }
  return myHeap.size() === 0 ? 0 : myHeap.pop()!
}
