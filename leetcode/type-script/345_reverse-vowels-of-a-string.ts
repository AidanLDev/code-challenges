function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let left = 0;
  let right = s.length - 1;
  let splitStr = s.split("");
  while (left < right && left < s.length && right > 0) {
    while (
      !vowels.includes(splitStr[left]) &&
      left < s.length &&
      left < right
    ) {
      left++;
    }
    console.log(`L Found ${splitStr[left]} at idx ${left}`);
    while (!vowels.includes(splitStr[right]) && right > 0 && right > left) {
      right--;
    }
    console.log(`R found ${splitStr[right]} at idx ${right}`);
    if (vowels.includes(splitStr[left]) && vowels.includes(splitStr[right])) {
      const tempLeft = splitStr[left];
      splitStr[left] = splitStr[right];
      splitStr[right] = tempLeft;
      left++;
      right--;
    }
  }
  return splitStr.join("");
}

let reverseVowelsInput1 = "IceCreAm";
let reverseVowelsInput2 = "leetcode";
// let reverseVowelsRes1 = reverseVowels(reverseVowelsInput1);
let reverseVowelsRes2 = reverseVowels(reverseVowelsInput2);

// console.log(`Res 1 is ${reverseVowelsRes1}`);
console.log(`Res 2 is ${reverseVowelsRes2}`);
