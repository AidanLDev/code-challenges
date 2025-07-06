// Checks if something is prime in O(√n) time and O(1) space
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  const rootOfN = Math.sqrt(n);

  for (let i = 2; i <= rootOfN; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(`Is 13 prime? ${isPrime(13)}`);
console.log(`Is 10 prime? ${isPrime(10)}`);
