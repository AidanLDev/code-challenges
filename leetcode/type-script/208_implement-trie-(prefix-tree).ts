interface TrieNode {
  isWord: boolean;
  char: string;
}

class Trie {
  private trieNode?: TrieNode;
  private trie: TrieNode[];

  constructor() {
    this.trie = [];
  }

  insert(word: string): void {
    let wordArr = word.split('');
    let cur = this.trie[0];
    /*
      let cur = trie[0]
      for each letter:
        if trie.includes(letter)
          let curIdx = trie.indexOf(letter);
          cur = trie[curIdx]
        else
          trie.push()
    */
  }

  search(word: string): boolean {}

  startsWith(prefix: string): boolean {}
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
