function decodeString(s: string): string {
  const stack: (string | number)[] = [];
  let repeat: number = 0;
  let curString: string = "";

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      repeat = repeat * 10 + parseInt(char);
    } else if (char === "[") {
      stack.push(curString);
      stack.push(repeat);
      curString = "";
      repeat = 0;
    } else if (char === "]") {
      const num = stack.pop() as number;
      const prevString = stack.pop() as string;
      curString = prevString + curString.repeat(num);
    } else {
      curString += char;
    }
  }

  return curString;
}
