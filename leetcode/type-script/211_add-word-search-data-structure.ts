class WordDictionary {
  root;
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word: string): void {
    let cur = this.root;
    for (const char of word) {
      const charCode = char.charCodeAt(0) - 97;
      if (cur.children[charCode] === null) {
        cur.children[charCode] = new TrieNode();
      }
      cur = cur.children[charCode];
    }
    cur.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word: string): boolean {
    const dfs = (node: TrieNode | null, i: number): boolean => {
      if (!node) return false;
      if (i === word.length) return node.isWord;
      const ch = word[i];
      if (ch !== ".") {
        const idx = ch.charCodeAt(0) - 97;
        return dfs(node.children[idx], i + 1);
      }
      // ch === ".", need to explore all possibilities
      for (const child of node.children) {
        if (child && dfs(child, i + 1)) return true;
      }
      return false;
    };
    return dfs(this.root, 0);
  }
}
