function reverseWords(s: string): string {
  return s
    .split(' ')
    .reverse()
    .filter(word => word !== '') // Use this instead of trim as trim only removes whitespace at the end and beginning
    .join(' ');
}
