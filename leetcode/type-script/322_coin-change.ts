function coinChangeRecursive(coins: number[], amount: number): number {
  const memo = new Map<number, number>();

  function dfs(rem: number): number {
    if (rem === 0) return 0;
    if (rem < 0) return -1;
    if (memo.has(rem)) return memo.get(rem)!;

    let min = Infinity;
    for (const coin of coins) {
      const res = dfs(rem - coin);
      if (res >= 0 && res < min) {
        min = res + 1;
      }
    }

    memo.set(rem, min === Infinity ? -1 : min);
    return memo.get(rem)!;
  }
  return dfs(amount);
}

function coinChangeBottomUpDP(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
