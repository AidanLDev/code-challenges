/**
 * You are given two integer arrays, skill and mana, of length n and m, respectively.

In a laboratory, n wizards must brew m potions in order. Each potion has a mana capacity mana[j] and must pass through all the wizards sequentially to be brewed properly. The time taken by the ith wizard on the jth potion is timeij = skill[i] * mana[j].

Since the brewing process is delicate, a potion must be passed to the next wizard immediately after the current wizard completes their work. This means the timing must be synchronized so that each wizard begins working on a potion exactly when it arrives. ​

Return the minimum amount of time required for the potions to be brewed properly.
 * @param skill The time it takes for wizard[i] to complete a potion
 * @param mana The amount of time taken to complete potion [j]
 * @returns The min time taken to complete all potions
 */
function minTime(skill: number[], mana: number[]): number {
  const n = skill.length;
  const m = mana.length;

  if (n === 0 || m === 0) return 0;

  const prefixSkill: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSkill[i] = skill[i] + (i > 0 ? prefixSkill[i - 1] : 0);
  }

  if (m === 0) return 0;
  if (m === 1) return prefixSkill[n - 1] * mana[0];

  let start = 0;
  for (let j = 0; j < m - 1; j++) {
    let delta = -Infinity;
    const nextMana = mana[j + 1];
    const curMana = mana[j];
    for (let i = 0; i < n; i++) {
      const a_ij = prefixSkill[i] * curMana;
      const a_i1_j1 = i > 0 ? prefixSkill[i - 1] * nextMana : 0;
      delta = Math.max(delta, a_ij - a_i1_j1);
    }
    start += delta;
  }

  return start + prefixSkill[n - 1] * mana[m - 1];
}

