class TrieNode {
  children: (TrieNode | null)[];
  isWord: boolean;
  constructor() {
    this.children = Array(26).fill(null);
    this.isWord = false;
  }
}
class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let cur = this.root;
    for (const char of word) {
      const i = char.charCodeAt(0) - 97;
      if (cur.children[i] === null) {
        cur.children[i] = new TrieNode();
      }
      cur = cur.children[i];
    }
    cur.isWord = true;
  }

  search(word: string): boolean {
    let cur = this.root;
    for (const char of word) {
      const i = char.charCodeAt(0) - 97;
      if (cur.children[i] === null) return false;
      cur = cur.children[i];
    }
    return cur.isWord;
  }

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (const char of prefix) {
      const i = char.charCodeAt(0) - 97;
      if (cur.children[i] === null) return false;
      cur = cur.children[i];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
