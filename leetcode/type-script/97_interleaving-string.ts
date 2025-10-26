function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (!s3) return true;
  if (s3.length !== s1.length + s2.length) return false;

  const m = s1.length;
  const n = s2.length;
  const seen = new Set<string>();
  const stack: Array<[number, number]> = [[0, 0]];

  while (stack.length) {
    const [i, j] = stack.pop()!;
    const key = `${i}:${j}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const k = i + j;
    if (k === s3.length) return true;

    if (i < m && s1[i] === s3[k]) {
      const newKey = `${i + 1}:${j}`;
      if (!seen.has(newKey)) stack.push([i + 1, j]);
    }

    if (j < n && s2[j] === s3[k]) {
      const newKey = `${i}:${j + 1}`;
      if (!seen.has(newKey)) stack.push([i, j + 1]);
    }
  }

  return false;
}

let example1S1 = "aabcc";
let example1S2 = "dbbca";
let example1S3 = "aadbbcbcac";
let isInterleaveExample1Res = isInterleave(example1S1, example1S2, example1S3);

console.log(`Expecting true, got ${isInterleaveExample1Res}`);
