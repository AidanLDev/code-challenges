function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let numOfSpaces: number = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let prevSpace = flowerbed[i - 1];
    let nextSpace = flowerbed[i + 1];
    let curSpace = flowerbed[i];
    if (!prevSpace && !nextSpace && !curSpace) {
      numOfSpaces++;
      flowerbed[i] = 1
    }
  }

  return numOfSpaces >= n;
}
