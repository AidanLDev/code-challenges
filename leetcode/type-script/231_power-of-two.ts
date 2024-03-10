function isPowerOfTwo(n: number): boolean {
  for (let i = 0; i < 32; i++) {
    if (n === Math.pow(2, i)) {
      return true;
    }
  }
  return false;
}
