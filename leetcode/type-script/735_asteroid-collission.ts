function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (const asteroid of asteroids) {
    let survived = true;
    while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
      if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroid)) {
        stack.pop();
        continue;
      } else if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroid)) {
        stack.pop();
        survived = false;
        break;
      } else {
        survived = false;
        break;
      }
    }
    if (survived) {
      stack.push(asteroid);
    }
  }
  return stack;
}

const example1 = [3, 5, -6, 2, -1, 4];
const res1 = asteroidCollision(example1);
console.log(`Expecting [-6, 2, 4] and got ${res1}`);
export default {};
