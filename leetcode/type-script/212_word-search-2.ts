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
        cur.children[charCode] = new TrieNode();
      }
      cur = cur.children[charCode];
    }
    cur.isWord = true;
  }

  search(word: string): boolean {
    let cur = this.root;
    for (const char of word) {
      const charCode = char.charCodeAt(0) - 97;
      if (cur.children[charCode] === null) return false;
      cur = cur.children[charCode];
    }
    return cur.isWord;
  }
}

export function wordSearchTwo(board: string[][], words: string[]): string[] {
  const res: Set<string> = new Set();
  // Add words to our trie
  const trie = new Trie();
  for (const word of words) {
    trie.addWord(word);
  }

  const rows = board.length;
  const cols = board[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function searchBoard(row: number, col: number, node: TrieNode, path: string) {
    // base case
    if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col])
      return;

    const char = board[row][col];
    const charCode = char.charCodeAt(0) - 97;
    const nextNode = node.children[charCode];

    // Node is not in our trie, skip it
    if (!nextNode) return;

    const newPath = path + char;
    if (nextNode.isWord) res.add(newPath);

    visited[row][col] = true;
    searchBoard(row + 1, col, nextNode, newPath);
    searchBoard(row - 1, col, nextNode, newPath);
    searchBoard(row, col + 1, nextNode, newPath);
    searchBoard(row, col - 1, nextNode, newPath);
    visited[row][col] = false;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      searchBoard(r, c, trie.root, "");
    }
  }

  return Array.from(res);
}

const board1 = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const words1 = ["oath", "pea", "eat", "rain"];
const res1 = ["eat", "oath"];

const output1 = wordSearchTwo(board1, words1);
console.log(`Is the output: ${output1} the same as the res: ${res1}?`);
