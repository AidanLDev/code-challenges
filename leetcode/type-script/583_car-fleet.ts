export function carFleet(
  target: number,
  position: number[],
  speed: number[]
): number {
  const cars: number[][] = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => a[0] - b[0]);
  const stack: number[] = [];

  console.log("cars: ", cars);

  for (let i = cars.length - 1; i >= 0; i--) {
    const [position, speed] = cars[i];
    const timeToTarget = (target - position) / speed;

    if (stack.length === 0 || timeToTarget > stack[stack.length - 1]) {
      stack.push(timeToTarget);
    }
  }

  return stack.length;
}

const res = carFleet(10, [3, 5, 7], [3, 2, 1]);
console.log("Amount of fleets: ", res);
