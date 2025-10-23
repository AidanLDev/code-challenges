function maxProfit(prices: number[]): number {
  const mem = new Map<string, number>();

  function dfs(i: number, buying: boolean) {
    if (i >= prices.length) return 0;
    if (mem.has(`${i}:${buying}`)) return mem.get(`${i}:${buying}`)!;

    if (buying) {
      let buy = dfs(i + 1, false) - prices[i];
      let coolDown = dfs(i + 1, buying);
      mem.set(`${i}:${buying}`, Math.max(buy, coolDown));
    } else {
      let sell = dfs(i + 2, true) + prices[i];
      let coolDown = dfs(i + 1, buying);
      mem.set(`${i}:${buying}`, Math.max(sell, coolDown));
    }
    return mem.get(`${i}:${buying}`)!;
  }

  return dfs(0, true);
}
