export function carFleet(
  target: number,
  position: number[],
  speed: number[]
): number {
  let fleets = 0;

  const cars: number[][] = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => a[0] - b[0]);
  const stack: number[][] = [];

  console.log("cars: ", cars);

  // Loop through cars

  // Work out the time it will take the furthest position car

  // if the car behind will collide, remove it from the cars array as it will become a fleet

  for (let i = cars.length - 1; i > 0; i--) {
    const timeToTarget = target - cars[i][0] / cars[i][1];
    if (stack.length === 0) {
      stack.push(cars[i]);
    }
  }

  return fleets;
}

carFleet(10, [3, 5, 7], [3, 2, 1]);
