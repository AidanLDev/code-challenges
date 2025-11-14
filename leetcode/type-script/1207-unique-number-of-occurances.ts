function uniqueOccurrences(arr: number[]): boolean {
  const occurrences: Record<number, number> = {};
  for (const num of arr) {
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  }
  const seen = new Set<number>();
  for (const occ in occurrences) {
    if (seen.has(occurrences[occ])) return false;
    seen.add(Number(occurrences[occ]));
  }
  return true;
}

const example1 = [1, 2, 2, 1, 1, 3];
const example2 = [1, 2];
const res1 = uniqueOccurrences(example1);
const res2 = uniqueOccurrences(example2);

console.log(`Expecting res1 to be true, got ${res1}`);
console.log(`Expecting res2 to be false, got ${res2}`);

export {};
