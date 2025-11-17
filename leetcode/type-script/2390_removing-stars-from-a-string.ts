function removeStars(s: string): string {
  const res: string[] = [];

  for (const char of s) {
    if (char !== "*") {
      res.push(char);
    } else {
      res.pop();
    }
  }

  return res.join("");
}
