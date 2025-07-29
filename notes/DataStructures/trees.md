# Trees

### Binary Trees

#### Traversal

There's two main ways to traverse trees, DFS (depth first search) which basically explores bottom first and then works its way up the tree. Then there's BFS (Breadth First Search) which explores more in a sideways way, going down one branch then then the next until the tree has been explored.

There are 3 different orders we can visit nodes using DFS:

- Pre-order
- In-order
- Post-order

##### Pre-order

This is done by visiting the root node first, then recersively pre-order traverse the left subtree, then the right one. The pre-order part comes from the fact we visit the node first then receruse

In Python it may look like:

```python
class Node:
  __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

def preOrderTraversal(node):
  if node is None:
    return
  print(node.data, end=", ")
  preOrderTraversal(node.left)
  preOrderTraversal(node.right)
```

As you can see we get the node.data before visiting the left side of the tree, then the right side of the tree

##### In-order traversal

This is mainly used in BSTs for returning values in ascending order. This is done by visiting nodes in-between recursive calls. So it explores the left sub-tree first, then when it gets to the leaf node we visit it, then we carry on with the right subtree after.

In Python it may look like:

```python
def inOrderTraversal(node):
  if node is None:
    return
  inOrderTraversal(node.left)
  print(node.data, end=", ")
  inOrderTraversal(node.right)
```

##### Post-order traversal

This works by traversing down the left subtree and the right subtree before visiting the node. It's commonly used for deleting a tree, post-fix notation of expression tree, etc.

In Python it may look like:

```python
def postOrderTraversal(node):
  if node is None:
    return
  postOrderTraversal(node.left)
  postOrderTraversal(node.right)
  print(node.data, end=", ")
```

### Binary Search Trees (BST)

Binary Search Trees are binary trees that conditionally store nodes depending on the node's value. The rules is. Children to the left of a Node must be smaller than the node's value. Children to the right of a Node must be larger than the Node's value

To get the values in ascending order, we can run an in-order traversal of the BST.

To find the replacement node we can run an in-order traversal and store the node that's one before the root node, so the next smallest one compared to the root.

We can use BSTs to find values quickly, as it's sorted. Each search we can disgard half of the remaining tree.

Here is how we can implement searching for a value in a BST using Python:

```python
def searchBst(node, target):
  if node is None:
    return None
  elif node.data == target:
    return node
  elif target < node.data:
    return searchBst(node.left, target)
  else:
    return searchBst(node.right, target)
```

The time complexity for searching a BST is O(H), where H is the height of the tree.
