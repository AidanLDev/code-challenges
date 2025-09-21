function decode(s: string): number {
  if (s.startsWith("0")) return 0;
  const mem: Record<number, number> = {};
  function process(idx: number): number {
    if (idx === s.length) return 1;
    if (s[idx] === "0") return 0;
    if (idx in mem) return mem[idx];

    let res = process(idx + 1);

    if (
      idx + 1 < s.length &&
      (s[idx] === "1" || (s[idx] === "2" && "0123456".includes(s[idx + 1])))
    ) {
      res += process(idx + 2);
    }
    mem[idx] = res;
    return res;
  }
  return process(0);
}
