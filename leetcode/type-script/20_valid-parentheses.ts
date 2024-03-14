function isValid(s: string): boolean {
  const openBraces = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const closingBraces = {
    '}': '{',
    ')': '(',
    ']': '[',
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
