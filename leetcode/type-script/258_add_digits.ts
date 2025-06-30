function addDigits(num: number): number {
  if (num < 10) {
    return num;
  }
  let sum = num;
  while (sum >= 10) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, cur) => Number(acc) + Number(cur), 0);
  }
  return sum;
}
