function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const res: boolean[] = [];
  const mostSweets = Math.max(...candies);
  for (const sweet of candies) {
    if (sweet + extraCandies >= mostSweets) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
}
