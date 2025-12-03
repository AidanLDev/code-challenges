const ranges = [
  "12077-25471",
  "4343258-4520548",
  "53-81",
  "43661-93348",
  "6077-11830",
  "2121124544-2121279534",
  "631383-666113",
  "5204516-5270916",
  "411268-591930",
  "783-1147",
  "7575717634-7575795422",
  "8613757494-8613800013",
  "4-19",
  "573518173-573624458",
  "134794-312366",
  "18345305-18402485",
  "109442-132958",
  "59361146-59451093",
  "1171-2793",
  "736409-927243",
  "27424-41933",
  "93-216",
  "22119318-22282041",
  "2854-4778",
  "318142-398442",
  "9477235089-9477417488",
  "679497-734823",
  "28-49",
  "968753-1053291",
  "267179606-267355722",
  "326-780",
  "1533294120-1533349219",
];

function sumInvalidIDs(rangeList: string[]) {
  // Use BigInt to safely accumulate totals for large values
  let total = 0n;

  const pow10 = (n: number) => BigInt(10) ** BigInt(n);

  for (const r of rangeList) {
    const [startStr, endStr] = r.split("-");
    const start = BigInt(startStr);
    const end = BigInt(endStr);

    const minDigits = startStr.length;
    const maxDigits = endStr.length;

    // Only even digit-length numbers can be a 'half repeated' (e.g., len 2, 4, 6, ...)
    for (let digits = Math.max(2, minDigits); digits <= maxDigits; digits++) {
      if (digits % 2 !== 0) continue; // only even lengths
      const halfLen = digits / 2;
      const factor = pow10(halfLen);

      // half must not have leading zeroes, so it's between 10^(halfLen-1) and 10^halfLen - 1
      const minHalf = halfLen === 1 ? 1n : pow10(halfLen - 1);
      const maxHalf = pow10(halfLen) - 1n;

      // We want half * (factor + 1) to be between start and end
      const denom = factor + 1n;

      // Compute half bounds such that repeated number is in [start, end]
      const from = (start + denom - 1n) / denom; // ceil(start / denom)
      const to = end / denom; // floor(end / denom)

      const firstHalf = from > minHalf ? from : minHalf;
      const lastHalf = to < maxHalf ? to : maxHalf;
      if (firstHalf > lastHalf) continue;

      // Add all valid repeated numbers produced by halves in range
      for (let h = firstHalf; h <= lastHalf; h++) {
        const n = h * denom; // half * (factor + 1)
        if (n >= start && n <= end) total += n;
      }
    }
  }

  return total;
}

// Example test from description:
const exampleRanges = [
  "11-22",
  "95-115",
  "998-1012",
  "1188511880-1188511890",
  "222220-222224",
  "1698522-1698528",
  "446443-446449",
  "38593856-38593862",
  "565653-565659",
  "824824821-824824827",
  "2121212118-2121212124",
];

console.log(
  "Example total (expected 1227775554):",
  String(sumInvalidIDs(exampleRanges))
);
console.log("Puzzle total (part 1):", String(sumInvalidIDs(ranges)));

function sumInvalidIDsPartTwo(rangeList: string[]) {
  let total = 0n;
  const seen = new Set<string>();
  const pow10 = (n: number) => BigInt(10) ** BigInt(n);

  for (const r of rangeList) {
    const [startStr, endStr] = r.split("-");
    const start = BigInt(startStr);
    const end = BigInt(endStr);

    const minDigits = startStr.length;
    const maxDigits = endStr.length;

    for (let digits = Math.max(2, minDigits); digits <= maxDigits; digits++) {
      // For each possible pattern length k that divides digits
      for (let k = 1; k <= Math.floor(digits / 2); k++) {
        if (digits % k !== 0) continue;
        const m = digits / k;
        if (m < 2) continue;

        // denom equals sum_{i=0..m-1} 10^{k*i}
        const denom = (pow10(k * m) - 1n) / (pow10(k) - 1n);

        const minHalf = k === 1 ? 1n : pow10(k - 1);
        const maxHalf = pow10(k) - 1n;

        const from = (start + denom - 1n) / denom;
        const to = end / denom;
        const firstHalf = from > minHalf ? from : minHalf;
        const lastHalf = to < maxHalf ? to : maxHalf;
        if (firstHalf > lastHalf) continue;

        for (let h = firstHalf; h <= lastHalf; h++) {
          const n = h * denom;
          if (n >= start && n <= end) {
            const key = n.toString();
            if (!seen.has(key)) {
              seen.add(key);
              total += n;
            }
          }
        }
      }
    }
  }

  return total;
}

console.log(
  "Example total (part 2 expected 4174379265):",
  String(sumInvalidIDsPartTwo(exampleRanges))
);
console.log("Puzzle total (part 2):", String(sumInvalidIDsPartTwo(ranges)));

export {};
