function leastInterval(tasks: string[], n: number): number {
  if (n === 0) return tasks.length;

  const freq: number[] = new Array(26).fill(0);
  for (const t of tasks) {
    freq[t.charCodeAt(0) - 65]++;
  }

  freq.sort((a, b) => b - a);
  const maxFreq = freq[0];
  let maxCount = 0;
  for (const f of freq) if (f === maxFreq) maxCount++;

  // Minimum intervals by formula
  const intervals = (maxFreq - 1) * (n + 1) + maxCount;
  return Math.max(tasks.length, intervals);
}

// Example
const tasks1 = ["A", "A", "A", "B", "B", "B"];
const n1 = 2;
const taskSchedulerResult1 = leastInterval(tasks1, n1);
console.log("res1:", taskSchedulerResult1);
