function addBinary(a: string, b: string): string {
  // Convert the two strings into binary numbers (the 0b pre-fix tells BigInt() that it's a binary number)
  // toString(2) converts the result back into a binary string
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}
