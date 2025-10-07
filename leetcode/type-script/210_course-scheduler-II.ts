function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const preMap: number[][] = Array.from({ length: numCourses }, () => []);
  const order: number[] = [];
  for (const [course, preReq] of prerequisites) {
    preMap[course].push(preReq);
  }

  const state = new Array<number>(numCourses).fill(0);

  function dfs(curCourse: number) {
    if (state[curCourse] === 1) return false;
    if (state[curCourse] === 2) {
      return true;
    }

    state[curCourse] = 1; // Mark as 1 so we know that we've seen it (cycle detection)

    for (const preReq of preMap[curCourse]) {
      if (!dfs(preReq)) return false;
    }
    // mark as processed (no cycles found in its prerequisites)
    preMap[curCourse] = [];
    state[curCourse] = 2;
    order.push(curCourse);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return order;
}
let numCourses1 = 4;
let prerequisites1 = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];
const findOrderRes1 = findOrder(numCourses1, prerequisites1);
console.log(findOrderRes1);
