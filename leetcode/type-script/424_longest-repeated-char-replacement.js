"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestCharReplacement = longestCharReplacement;
/**
 * @description You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
 *  After performing at most k replacements, return the length of the longest substring which contains only one distinct character.
 * @param s upper case chars
 * @param k the amount of chars we can convert
 * @returns the number of the longest repeated character in the array
 */
function longestCharReplacement(s, k) {
    var curLongest = 0;
    var l = 0;
    var charCount = {};
    var maxCount = 0;
    for (var r = 0; r < s.length; r++) {
        charCount[s[r]] = (charCount[s[r]] || 0) + 1;
        maxCount = Math.max(maxCount, charCount[s[r]]);
        while (r - l + 1 - maxCount > k) {
            charCount[s[l]]--;
            l++;
        }
        curLongest = Math.max(curLongest, r - l + 1);
    }
    return curLongest;
}
var str1 = "ABAB";
var k1 = 2;
console.log("output1: ", longestCharReplacement(str1, k1));
