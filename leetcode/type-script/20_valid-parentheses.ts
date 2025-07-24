function isValid(s: string): boolean {
  const openBraces = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  const closingBraces = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  let stack: string[] = [];
  let isValid: boolean;

  for (let i = 0; i < s.length; i++) {
    if (openBraces.hasOwnProperty(s[i])) {
      // It's an opening braces
      stack.push(s[i]);
    } else {
      // It's a closing brace
      if (stack.length > 0) {
        let braceToCheck = stack[stack.length - 1];
        isValid = braceToCheck === closingBraces[s[i]];
        if (!isValid) {
          return false;
        }
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export function isValid2025(s: string): boolean {
  const parenStack: string[] = [];
  const openBrackets = ["(", "{", "["];
  const bracketRefTable = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (const char of s) {
    if (openBrackets.includes(char)) {
      parenStack.push(char);
    } else {
      // Must be a closing bracket
      if (parenStack.length === 0) {
        return false;
      }
      const topOfStack = parenStack.pop();
      if (topOfStack !== bracketRefTable[char]) {
        return false;
      }
    }
  }
  return parenStack.length === 0;
}

