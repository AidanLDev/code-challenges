function DigPow(n, p) {
  const numArr = n
    .toString()
    .split("")
    .map((num) => Number(num));
  let power = p;
  const sum = numArr.reduce((acc, cur) => {
    const res = Math.pow(cur, power);
    power++;
    return res + acc;
  }, 0);
  const k = sum / n;
  return Number.isInteger(k) ? k : -1;
}

const num = 695;
const power = 2;
console.log(`Testing DigPow with ${num} and the power ${power}`);
console.log("result: ", DigPow(num, power));
