function evalRPN(tokens: string[]): number {
  if (!tokens) {
    return 0;
  }
  const stack: string[] = [];
  const operators: string[] = ['+', '-', '*', '/'];
  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      let operator = tokens[i];
      let num2 = Number(stack.pop());
      let num1 = Number(stack.pop());
      stack.push(doSum(operator, num1, num2));
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop()); // Should just have hte final result?
}

function doSum(operator: string, num1: number, num2: number): string {
  let sumRes;
  switch (operator) {
    case '+':
      sumRes = num1 + num2;
      break;
    case '-':
      sumRes = num1 - num2;
      break;
    case '*':
      sumRes = num1 * num2;
      break;
    case '/':
      if (num1 < 0 !== num2 < 0) {
        sumRes = Math.ceil(num1 / num2); // round down if the result is negative
      } else {
        sumRes = Math.floor(num1 / num2);
      }
      break;
    default:
      sumRes = 0;
      break;
  }
  return sumRes.toString();
}
