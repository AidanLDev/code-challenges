/**
 * @description There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 * @param numCourses the amount of courses from 0 -> n - 1
 * @param prerequisites An array of pairs of courses, [ai, bi] indicates that bi must be complete first if you want to do ai
 */
export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const adj: number[][] = Array.from({ length: numCourses }, () => []);
  const indegree = new Array<number>(numCourses).fill(0);

  for (const [ai, bi] of prerequisites) {
    adj[bi].push(ai);
    indegree[ai]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let processed = 0;
  let qi = 0;
  while (qi < queue.length) {
    const node = queue[qi++];
    processed++;
    for (const nei of adj[node]) {
      indegree[nei]--;
      if (indegree[nei] === 0) queue.push(nei);
    }
  }

  return processed === numCourses;
}

export function myCanFinishDfsSolution(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const preMap: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [course, preReq] of prerequisites) {
    preMap[course].push(preReq);
  }

  const state = new Array<number>(numCourses).fill(0);

  function dfs(curCourse: number) {
    if (state[curCourse] === 1) return false;
    if (state[curCourse] === 2) return true;

    state[curCourse] = 1; // Mark as 1 so we know that we've seen it (cycle detection)

    for (const preReq of preMap[curCourse]) {
      if (!dfs(preReq)) return false;
    }
    // mark as processed (no cycles found in its prerequisites)
    preMap[curCourse] = [];
    state[curCourse] = 2;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}
