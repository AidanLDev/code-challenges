function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) {
    return -1; // Can't have a needle larger than the haystack
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}
