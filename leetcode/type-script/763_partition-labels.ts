/*
  -- Thinking
  - Find last idx of each character
  - Ensure all indexes within the range of idx -> lastIdxOfChar are within lasIdxOfChar
    - if so, partition there
    - if not, increase range and keep going through the chars until we find a valid window
    - Repeat until we've found the range up to s.length
*/
function partitionLabels(s: string): number[] {}

let partitionLabelsS1 = "ababcbacadefegdehijhklij";
let partitionLabelsExpectedRes1 = [9, 7, 8];
let partitionLabelsS2 = "eccbbbbdec";
let partitionLabelsExpectedRes2 = [10];

/**
 * You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

 

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
*/
