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

  public static void main(String[] args) {
    testReverseString();
  }

}