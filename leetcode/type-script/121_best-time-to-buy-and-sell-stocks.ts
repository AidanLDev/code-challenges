function maxProfit(prices: number[]): number {
  let largestProfit: number = 0;

  if (!prices || prices.length === 1) {
    return 0;
  }

  let curLowest = prices[0];

  prices.forEach((num) => {
    if (num < curLowest) {
      curLowest = num;
    }
    let sum = num - curLowest;
    if (sum > largestProfit) {
      largestProfit = sum;
    }
  });

  return largestProfit;
}
