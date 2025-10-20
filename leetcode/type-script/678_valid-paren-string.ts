function checkValidString(s: string): boolean {
  let low = 0;
  let high = 0;
  for (const ch of s) {
    if (ch === "(") {
      low += 1;
      high += 1;
    } else if (ch === ")") {
      low -= 1;
      high -= 1;
    } else {
      low -= 1;
      high += 1;
    }
    if (high < 0) return false;
    if (low < 0) low = 0;
  }
  return low === 0;
}

/*
(*))
((*)
()
*/
let validStringExample1 = "(*))";
let validStringExample2 = "((*)";
let validStringExample3 = "()";
let invalidStringExample1 = "(*)))";
let invalidStringExample2 = "((*)(";
let validStrRes1 = checkValidString(validStringExample1);
let validStrRes2 = checkValidString(validStringExample2);
let validStrRes3 = checkValidString(validStringExample3);
let invalidRes1 = checkValidString(invalidStringExample1);
let invalidRes2 = checkValidString(invalidStringExample2);
console.log("res should be true, true, true, false false", {
  validStrRes1,
  validStrRes2,
  validStrRes3,
  invalidRes1,
  invalidRes2,
});
