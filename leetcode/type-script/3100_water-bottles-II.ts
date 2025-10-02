function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let totalDrank = 0;

  let fullBottles = numBottles;
  let emptyBottles = 0;

  while (fullBottles > 0 || emptyBottles >= numExchange) {
    if (emptyBottles >= numExchange) {
      emptyBottles = emptyBottles - numExchange;
      numExchange++;
      fullBottles++;
    } else if (fullBottles) {
      totalDrank += fullBottles;
      emptyBottles += fullBottles;
      fullBottles = 0;
    }
  }

  return totalDrank;
}

const numBottles1 = 13;
const numExchange1 = 6;
const maxBottlesDrunkRes1 = maxBottlesDrunk(numBottles1, numExchange1);
console.log("maxBottlesDrunkRes1: ", maxBottlesDrunkRes1);
