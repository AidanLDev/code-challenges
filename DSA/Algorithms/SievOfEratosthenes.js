function siev(n) {
  if (n < 2) {
    return null;
  }

  // Array of true values (assuming every value is prime)
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  let i = 2;
  while (i * i <= n) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
    i++;
  }
  return isPrime
    .map((prime, i) => (prime ? i : null))
    .filter((x) => x !== null);
}

console.log(siev(500));
