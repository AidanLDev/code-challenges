"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordSearchTwo = wordSearchTwo;
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = [];
        this.isWord = false;
        this.children = Array(26).fill(null);
        this.isWord = false;
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.addWord = function (word) {
        var cur = this.root;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            var charCode = char.charCodeAt(0) - 97;
            if (cur.children[charCode] === null) {
                cur.children[charCode] = new TrieNode();
            }
            cur = cur.children[charCode];
        }
        cur.isWord = true;
    };
    Trie.prototype.search = function (word) {
        var cur = this.root;
        for (var _i = 0, word_2 = word; _i < word_2.length; _i++) {
            var char = word_2[_i];
            var charCode = char.charCodeAt(0) - 97;
            if (cur.children[charCode] === null)
                return false;
            cur = cur.children[charCode];
        }
        return cur.isWord;
    };
    return Trie;
}());
function wordSearchTwo(board, words) {
    var res = new Set();
    // Add words to our trie
    var trie = new Trie();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        trie.addWord(word);
    }
    var rows = board.length;
    var cols = board[0].length;
    var visited = Array.from({ length: rows }, function () { return Array(cols).fill(false); });
    function searchBoard(row, col, node, path) {
        // base case
        if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col])
            return;
        var char = board[row][col];
        var charCode = char.charCodeAt(0) - 97;
        var nextNode = node.children[charCode];
        // Node is not in our trie, skip it
        if (!nextNode)
            return;
        var newPath = path + char;
        if (nextNode.isWord)
            res.add(newPath);
        visited[row][col] = true;
        searchBoard(row + 1, col, nextNode, newPath);
        searchBoard(row - 1, col, nextNode, newPath);
        searchBoard(row, col + 1, nextNode, newPath);
        searchBoard(row, col - 1, nextNode, newPath);
        visited[row][col] = false;
    }
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            searchBoard(r, c, trie.root, "");
        }
    }
    return Array.from(res);
}
var board1 = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
];
var words1 = ["oath", "pea", "eat", "rain"];
var res1 = ["eat", "oath"];
var output1 = wordSearchTwo(board1, words1);
console.log("Is the output: ".concat(output1, " the same as the res: ").concat(res1, "?"));
