export function rowSumOddNumbers(n) {
  const triangle = [];
  let sum = 1;
  if (n === 1) return sum;
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < i + 1; j++) {
      row.push(sum);
      sum += 2;
    }
    triangle.push(row);
  }
  return triangle[triangle.length - 1].reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
