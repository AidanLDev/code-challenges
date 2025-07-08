/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
function isPalindrome(s) {
    var strippedS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    var j = strippedS.length - 1;
    for (var i = 0; i <= j; i++) {
        if (strippedS[i] !== strippedS[j]) {
            return false;
        }
        j--;
    }
    return true;
}
var test1 = "A man, a plan, a canal: Panama";
var test2 = "race a car";
console.log("Checking if ".concat(test1, " is a palindrome: ").concat(isPalindrome(test1)));
console.log("Checking if ".concat(test2, " is a palindrome: ").concat(isPalindrome(test2)));
