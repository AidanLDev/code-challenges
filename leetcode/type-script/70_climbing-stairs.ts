function climbStairs(n: number): number {
  // Less than 2, can only do n ways to get up
  if (n <= 2) {
    return n;
  }

  // Keep track of prev two steps
  let prev = 1;
  let bPrev = 2;
  // current step based on previous two steps
  let current = 0;

  for (let i = 1; i < n - 1; i++) {
    current = prev + bPrev; // calc current steps
    // update previous steps for next iteration
    prev = bPrev;
    bPrev = current;
  }

  return current;
}

/*
  ## Explanation ##
  The function calculates the number of distinct ways to climb
  a staircase of n steps. There are two ways to reach the next
  step, by taking 1 step or 2 steps.

  The base case n <= 2 works because if the steps is two, we can either take 1 two or two steps (N)

  Initialisation:
  prev represents the number of ways to climb the first step and bPrev the second step
  Current keeps track of how many distinct steps have been taken

  Iteration:
  The function loops n -2 times (since the first two steps are already accounted for)
  Each iteration, it calculates the number of ways to reach the two previous steps (prev and bPrev)
  It then updates prev + bPrev for the next iteration

  So, for example, if n is 3, the function calculates current as prev + bPrev (1 + 2), and returns current (3)
  which is the correct answer. This is because there are 3 ways to climb 3 steps:
  [1 step + 1 step + 1 step], [1 step + 2 steps], and [2 steps + 1 step].
*/

function climbStairsTwo(n: number): number {
  const mem = new Map<number, number>();
  function climb(curStair: number): number {
    if (mem.has(curStair)) return mem.get(curStair)!;
    if (curStair > n) return 0;
    if (curStair === n) return 1;
    mem.set(curStair, climb(curStair + 1) + climb(curStair + 2));
    return mem.get(curStair)!;
  }
  return climb(0);
}

function climbStairsThree(n: number): number {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  let cur: number = 0;
  let first: number = 1;
  let second: number = 2;
  for (let i = 2; i < n; i++) {
    cur = first + second;
    first = second;
    second = cur;
  }
  return cur;
}

console.log("4", climbStairsTwo(44));
// 1134903170