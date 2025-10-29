function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length;
  const n = num2.length;
  const res: number[] = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    const a = num1.charCodeAt(i) - 48;
    for (let j = n - 1; j >= 0; j--) {
      const b = num2.charCodeAt(j) - 48;
      const mul = a * b;
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + res[p2];
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }

  let idx = 0;
  while (idx < res.length && res[idx] === 0) idx++;
  const sb: string[] = [];
  for (; idx < res.length; idx++) sb.push(String(res[idx]));

  return sb.length === 0 ? "0" : sb.join("");
}

// Quick manual tests when run directly with ts-node/node (transpiled)
if (require.main === module) {
  const cases: Array<[string, string, string]> = [
    ["2", "3", "6"],
    ["123", "456", "56088"],
    ["0", "1234", "0"],
    ["999", "999", "998001"],
  ];
  for (const [a, b, expected] of cases) {
    const out = multiply(a, b);
    console.log(
      `${a} * ${b} = ${out}  ${
        out === expected ? "✓" : `✗ (expected ${expected})`
      }`
    );
  }
}

export { multiply };
