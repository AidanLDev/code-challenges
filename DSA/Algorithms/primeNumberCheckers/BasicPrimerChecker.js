function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(`is 7 prime? ${isPrime(7)}`);
