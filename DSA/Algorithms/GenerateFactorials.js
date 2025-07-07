function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const factorialOf5 = factorial(5);
console.log("factorialOf5 is: ", factorialOf5);
