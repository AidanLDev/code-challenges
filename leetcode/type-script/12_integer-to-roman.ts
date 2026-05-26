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

function intToRoman(num: number): string {
  const strResArr: Numeral[] = [];

  (Object.keys(NUMERAL_MAP) as Numeral[]).forEach((numeral) => {
    while (num >= NUMERAL_MAP[numeral]) {
      num -= NUMERAL_MAP[numeral];
      strResArr.push(numeral);
    }
  });

  return strResArr.join("");
}
console.log(intToRoman(6));
console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));

export {};
