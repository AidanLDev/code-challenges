function change(amount: number, coins: number[]): number {
  const mem = new Map<string, number>();
  function dfs(i: number, a: number): number {
    if (a === amount) return 1;
    if (a > amount) return 0;
    if (i >= coins.length) return 0;
    if (mem.has(`${i}:${a}`)) return mem.get(`${i}:${a}`)!;
    mem.set(`${i}:${a}`, dfs(i, a + coins[i]) + dfs(i + 1, a));
    return mem.get(`${i}:${a}`)!;
  }
  return dfs(0, 0);
}

let example1Amount = 5;
let example1Coins = [1, 2, 5];
let example1Res = change(example1Amount, example1Coins);
console.log(`Expecting example 1 to be 4 and got ${example1Res}`);
