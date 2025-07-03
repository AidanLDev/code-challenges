public class Main {
  // 1.1
  static boolean findUniqueCharacters(String word) {
    System.out.println("Looping through each char");
    String lower = word.toLowerCase();
    for (int i = 0; i < lower.length(); i++) {
      char letter = lower.charAt(i);
      if (lower.indexOf(letter) != lower.lastIndexOf(letter)) {
        return false;
      }
    }
    return true;
  }

  static void testFindUniqueCharacters() {
    System.out.println("string has all unique characters?: " + findUniqueCharacters("Johnson"));
    System.out.println("string has all unique characters?: " + findUniqueCharacters("Aidan"));
    System.out.println("string has all unique characters?: " + findUniqueCharacters("Ben"));
  }

  // 1.2
  static String reverseString(String word) {
    String reversedString = word;
    int lastIndex = word.length() - 1;
    for (int i = 0; i <= lastIndex; i++) {
      StringBuilder sb = new StringBuilder(reversedString);
      System.out.println("Looping with these index... " + i + lastIndex);
      char first = word.charAt(i);
      char last = word.charAt(lastIndex);
      sb.setCharAt(i, last);
      sb.setCharAt(lastIndex, first);
      reversedString = sb.toString();
      lastIndex--;
    }
    return reversedString;
  }

  static void testReverseString() {
    String word1 = "Hello";
    String word2 = "Mate";
    String word3 = "test";
    System.out.println("Reversing word: " + word1 + " " + reverseString(word1));
    System.out.println("Reversing word: " + word2 + " " + reverseString(word2));
    System.out.println("Reversing word: " + word3 + " " + reverseString(word3));
  }

  // 1.3
  static String removeDupesInPlace(String word) {
    for (int i = 0; i < word.length(); i++) {
      int firstIndex = word.indexOf(word.charAt(i));
      int lastIndex = word.lastIndexOf(word.charAt(i));
      while (firstIndex != lastIndex) {
        StringBuilder sb = new StringBuilder(word);
        sb.deleteCharAt(lastIndex);
        word = sb.toString();
        lastIndex = word.lastIndexOf(word.charAt(i));
      }
    }
    return word;
  }

  static void testRemoveDupesInPlace() {
    String word1 = "aaron";
    String word2 = "bob";
    String word3 = "Lotsssss";
    System.out.println("About to test: " + word1 + " res: " +
        removeDupesInPlace(word1));
    System.out.println("About to test: " + word2 + " res: " +
        removeDupesInPlace(word2));
    System.out.println("About to test: " + word3 + " res: " +
        removeDupesInPlace(word3));
  }

  // 1.4 Write a method to decide if two strings are anagrams or not
  static boolean isAnagram(String originalWord, String wordToCheck) {
    for (int i = 0; i < originalWord.length(); i++) {
      char letterToCheck = originalWord.charAt(i);
      int wordToCheckIdx = wordToCheck.indexOf(letterToCheck);
      if (wordToCheckIdx == -1) {
        return false;
      }
      StringBuilder sb = new StringBuilder(wordToCheck);
      sb.deleteCharAt((wordToCheckIdx));
      wordToCheck = sb.toString();
      System.out.println("wordToCheck after delete: " + wordToCheck);
    }
    System.out.println("wordToCheck after algo: " + wordToCheck);
    if (wordToCheck == "") {
      System.out.println("word to check is null...");
      return true;
    }
    return false;
  }

  // 1.4 tests
  static void testIsAnagram() {
    String name1 = "aidan";
    String name2 = "nadia";
    String name3 = "benny";
    String name4 = "jenny";

    System.out.println("Is " + name1 + " an anagram of: " + name2 + "? " + isAnagram(name1, name2));
    System.out.println("Is " + name3 + " an anagram of: " + name4 + "? " + isAnagram(name3, name4));
  }

  // 1.5 Write a method to replace all spaces in a string with '%20'

  // 1.5 tests

  // 1.6 Given an image represented by an NxN matrix, where each pixel in the
  // image is 4 bytes, write a method to rotate the image by 90 degrees. Can you
  // do this in place?

  // 1.6 tests

  // 1.7 If an element in MxN matrix is 0, the entire row and column is set to 0

  // 1.7 tests

  // 1.8 Assume you have a method isSubstring which checks if one word is a
  // substring of another. Given two strings, s1 and s2, write code to check if s2
  // is a rotation of s1 using only one call to isSubstring (i.e. "waterbottle",
  // "erbottlewat")

  // 1.8 tests

  public static void main(String[] args) {
    testIsAnagram();
  }

}