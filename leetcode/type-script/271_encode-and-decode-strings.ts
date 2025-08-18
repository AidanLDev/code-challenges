export function encode(strs: string[]): string {
  if (strs.length === 0) return "empty";
  return strs.join("¬");
}

export function decode(str: string): string[] {
  if (str === "empty") return [];
  if (str === "") return [""];
  if (!str) return [];
  console.log("str: ", str);
  return str.split("¬");
}
