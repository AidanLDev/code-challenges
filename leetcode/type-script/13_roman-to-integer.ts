type Numeral =
  | "I"
  | "IV"
  | "V"
  | "IX"
  | "X"
  | "XL"
  | "L"
  | "XC"
  | "C"
  | "CD"
  | "D"
  | "CM"
  | "M";

const NUMERAL_MAP: Record<Numeral, number> = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function romanToInt(s: string): number {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = NUMERAL_MAP[s[i] as Numeral];
    const next = NUMERAL_MAP[s[i + 1] as Numeral];

    if (next && cur < next) {
      total -= cur;
    } else {
      total += cur;
    }
  }

  return total;
}
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
export {};
