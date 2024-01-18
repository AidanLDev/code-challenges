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
