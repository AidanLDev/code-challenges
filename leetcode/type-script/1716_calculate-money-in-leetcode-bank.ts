function totalMoney(n: number): number {
  let total = 1;
  let curCycle = 1;
  for (let i = 1; i < n; i++) {
    if (i % 7 === 0) {
      curCycle++;
    }
    total += curCycle + (i % 7);
  }
  return total;
}

let totalMoneyN1 = 4;
let totalMoneyRes1 = totalMoney(totalMoneyN1);
console.log(`totalMoney(${totalMoneyN1}) = ${totalMoneyRes1}`);
