"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBalanced = isBalanced;
exports.isRouteBetweenVertexes = isRouteBetweenVertexes;
exports.createTreeFromArray = createTreeFromArray;
exports.createLinkedListsFromTree = createLinkedListsFromTree;
// - 4.1: Implement a function to check if a tree is balanced. For the purpose of this questin, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one
function isBalanced(root) {
    var longestBranch = -Infinity;
    var shortestBranch = Infinity;
    function traverse(node, curDepth) {
        if (curDepth === void 0) { curDepth = 0; }
        if (!node.left && !node.right) {
            if (curDepth > longestBranch)
                longestBranch = curDepth;
            if (curDepth < shortestBranch)
                shortestBranch = curDepth;
            return;
        }
        if (node.left) {
            traverse(node.left, curDepth + 1);
        }
        if (node.right) {
            traverse(node.right, curDepth + 1);
        }
    }
    traverse(root);
    return longestBranch <= shortestBranch + 2; // If there is a difference of more than +2 between the longest and shortest branch, the tree is unbalanced
}
// - 4.2: Given a directed graph, design an algorithm to find out wheather there is a route between two nodes.
function isRouteBetweenVertexes(start, end) {
    if (start === end)
        return true;
    var visited = new Set();
    var queue = [start];
    while (queue.length > 0) {
        var current = queue.shift();
        if (current === end)
            return true;
        visited.add(current);
        for (var _i = 0, _a = current.edges; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
            }
        }
    }
    return false;
}
// - 4.3: Given a sorted (increasing order) array, write an algorithm to created a binary tree with minimal height
function createTreeFromArray(numbers) {
    if (numbers.length === 0)
        return undefined;
    function createTreeNode(num) {
        return { value: num, left: undefined, right: undefined };
    }
    var mid = Math.floor(numbers.length / 2);
    var root = createTreeNode(numbers[mid]);
    root.left = createTreeFromArray(numbers.slice(0, mid));
    root.right = createTreeFromArray(numbers.slice(mid + 1));
    return root;
}
// - 4.4: Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth (i.e. if you have a tree with depth D, you'll have D linked lists)
function createLinkedListsFromTree(tree) {
    // Need to do BFS
    // Think I can do using a queue
    var queue = [tree.left, tree.right];
    while (queue.length > 0) {
        var curNode = queue.shift();
        console.log(curNode === null || curNode === void 0 ? void 0 : curNode.value);
        if (curNode === null || curNode === void 0 ? void 0 : curNode.left) {
            queue.push(curNode.left);
        }
        if (curNode === null || curNode === void 0 ? void 0 : curNode.right) {
            queue.push(curNode.right);
        }
    }
}
// Example: create a BST from a sorted array for demonstration
var bstExample = createTreeFromArray([1, 2, 3, 4, 5, 6, 7]);
createLinkedListsFromTree(bstExample);
// - 4.5: Write an algorithm to find the 'next' node (i.e. in order sucessor) of a given node in a binary search tree where each node has a link to its parent
// - 4.6: Design an algorithm and write code to find the first common ancesotor of two nodes in a binary tree. Avoid storing additional nodes in data structure. NoTE: this is not necessarily a binary search tree
// - 4.7: You have two very large binary trees: T1, with millions of nodes, and T2, with hundreds of nodes. Create an algorithm to decide if T2 is a subtree of T1.
// - 4.8: You are given a binary tree in which each node contains a value. Design an algorithm to print all paths which sum up to that value. Note that it can be any path in the tree - it does not have to start at the root.
