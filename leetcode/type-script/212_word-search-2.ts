class TrieNode {
  children: (TrieNode | null)[] = [];
  isWord: boolean = false;
  constructor() {
    this.children = Array(26).fill(null);
    this.isWord = false;
  }
}

class Trie {
  root;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let cur = this.root;
    for (const char of word) {
      const charCode = char.charCodeAt(0) - 97;
      if (cur.children[charCode] === null) {
      }
    }
  }
}

export function wordSearchTwo(board: string[][], words: string[]): string[] {
  const res: string[] = [];

  return res;
}

const board1 = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const words1 = ["oath", "pea", "eat", "rain"];
const res1 = ["eat", "oath"];
