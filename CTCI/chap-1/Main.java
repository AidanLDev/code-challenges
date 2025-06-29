public class Main {
  // 1.1
  static boolean findUniqueCharacters(String word) {
    System.out.println("Looping through each char");
    for (int i = 0; i < word.length(); i++) {
      char letter = word.charAt(i);
      System.out.println(letter);
    }
    return false;
  }

  public static void main(String[] args) {
    System.out.println("string has all unique characters?: " + findUniqueCharacters("Johnson"));
  }

}