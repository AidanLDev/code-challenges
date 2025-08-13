"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subStrings = subStrings;
exports.convertDecimalToBinary = convertDecimalToBinary;
exports.nextSameBits = nextSameBits;
exports.bitsRequiredToConvertAtoB = bitsRequiredToConvertAtoB;
// - 5.1: You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method to set all bits between i and j in N equal to M (e.g., M becomes a substring of N located at i and starting at j).
/*
EXAMPLE:
input  N = 10000000000, M = 10101, i = 2, j = 6
Output N = 10000101010100
*/
function subStrings(N, M, i, j) {
    var left = -1 << (j + 1);
    var right = (1 << i) - 1;
    var mask = left | right;
    var n_cleared = N & mask;
    var m_shifted = M << i;
    // Always return as unsigned 32-bit integer
    return (n_cleared | m_shifted) >>> 0;
}
// - 5.2: Given a (decimal - e.g. 3.72) number that is parsed in as a string, print the binary reprsentation. If the number can not be represented accurately in binary, print "ERROR"
function convertDecimalToBinary(decimalNum) {
    var _a = decimalNum.split("."), wholeNum = _a[0], fractionalNum = _a[1];
    var wholeNumBinary = Number(wholeNum).toString(2);
    if (!fractionalNum || Number(fractionalNum) === 0)
        return wholeNumBinary;
    var MAX_LENGTH = 32;
    var fraction = Number("0." + fractionalNum);
    var fractionBinary = ".";
    while (fraction > 0) {
        if (fractionBinary.length > MAX_LENGTH)
            return "ERROR";
        fraction *= 2;
        if (fraction >= 1) {
            fractionBinary += "1";
            fraction -= 1;
        }
        else {
            fractionBinary += "0";
        }
    }
    return wholeNumBinary + fractionBinary;
}
// - 5.3: Given an integer, print the next smallest and next largets number that have the same number of 1 bits in their binary representation.
function nextSameBits(num /* e.g. 5 */) {
    // num as bits: 101
    // Count nums 1 bits
    function findNumberOfOnes(copyOfNum) {
        var numOfOnes = 0;
        while (copyOfNum > 0) {
            numOfOnes += copyOfNum & 1;
            copyOfNum >>= 1;
        }
        return numOfOnes;
    }
    var onesInNum = findNumberOfOnes(num);
    var smallestNum = -1;
    for (var i = num - 1; i > 0; i--) {
        var curNumOfOnes = findNumberOfOnes(i);
        if (curNumOfOnes === onesInNum) {
            smallestNum = i;
            break;
        }
    }
    var largestNum = -1;
    var highest32BitInt = Math.pow(2, 32) - 1;
    for (var i = num + 1; i < highest32BitInt; i++) {
        var curNumOfOnes = findNumberOfOnes(i);
        if (curNumOfOnes === onesInNum) {
            largestNum = i;
            break;
        }
    }
    return [smallestNum, largestNum];
}
// 5.4 Explain what the following code does: ((n & (n-1)) == 0)
/**
 * @description ((n & (n - 1)) == 0)
 * This expression checks if n is a power of two (or 0)
 * It works because of power of two in binary has exactly one bit set.
 * Subtracting 1 flips all the bits after the rightmost set bit (including it),
 * so n & (n - 1) will only be 0 for powers of two (and 0)
 */
/*
5.5 Write a function to determine the number of bits required to convert integer A to integer B

input: 31, 14
31 in bits - 11111
17 in bits (the difference between 31 and 14) - 10001

output: 2
*/
function bitsRequiredToConvertAtoB(a, b) {
    var xorSum = a ^ b;
    var numOfBits = 0;
    while (xorSum > 0) {
        numOfBits += xorSum & 1;
        xorSum >>= 1;
    }
    return numOfBits;
}
console.log("number of bits between 31 and 14: ", bitsRequiredToConvertAtoB(31, 14));
// 5.6 Write a program to swap odd and even bits in an integer with as few instructions as possible (e.g., bit 0 and bit 1 are swapped, bit 2 and 3 3 are swapped etc.)
// 5.7 An array A[1...n] contains all the integers from - to n exepct for one number which is missing. In this problem we cannot access an entire integer in A with a single operation. The elements of A are represented in binary, and the only operation we can use to access them is "fetch the jth bit of A[i]", which takes constant time. Write code to find the missing integer. Can you do it in O(n) time?
