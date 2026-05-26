type OpeningBrackets = "(" | "[" | "{";
type ClosingBrackets = ")" | "]" | "}";

const BRACKET_MAP: Record<ClosingBrackets, OpeningBrackets> = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const openBracketTypes = new Set<OpeningBrackets>(["(", "[", "{"]);

function isValid(s: string): boolean {
  const STRING_LENGTH = s.length;
  const openBrackets: OpeningBrackets[] = [];

  for (let i = 0; i < STRING_LENGTH; i++) {
    const curBracket = s[i] as OpeningBrackets | ClosingBrackets;
    if (openBracketTypes.has(curBracket as OpeningBrackets)) {
      openBrackets.push(curBracket as OpeningBrackets);
    } else {
      if (!openBrackets || openBrackets?.length <= 0) return false;
      const openBracket = openBrackets.pop();
      if (openBracket !== BRACKET_MAP[curBracket as ClosingBrackets])
        return false;
    }
  }

  return openBrackets.length === 0;
}
