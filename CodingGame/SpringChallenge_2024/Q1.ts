/**
 * @param n The number of buildings
 * @param buildingMap Representation of the n buildings
 * @return The height of each building.
 */
function buildingHeights(n: number, buildingMap: string[]): number[] {
  // Write your code here
  let numOfBuildings: number[] = [];
  buildingMap.forEach((building) => {
    numOfBuildings.push(building.split('').filter((s) => s === '*').length);
  });
  return numOfBuildings;
}

/* Ignore and do not change the code below */

/**
 * Try a solution
 * @param output The height of each building.
 */
function trySolution(output: number[]) {
  console.log('' + JSON.stringify(output));
}
trySolution(buildingHeights(JSON.parse(readline()), JSON.parse(readline())));
/* Ignore and do not change the code above */
