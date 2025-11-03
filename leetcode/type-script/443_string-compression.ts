/*
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

Note: The characters in the array beyond the returned length do not matter and should be ignored.

 
*/
function compress(chars: string[]): number {
  if (chars.length === 0) return 0;

  let write = 0;
  let read = 0;

  while (read < chars.length) {
    const ch = chars[read];
    let count = 0;
    while (read < chars.length && chars[read] === ch) {
      read++;
      count++;
    }

    chars[write++] = ch;

    if (count > 1) {
      const digits = String(count);
      for (let i = 0; i < digits.length; i++) {
        chars[write++] = digits[i];
      }
    }
  }

  return write;
}
