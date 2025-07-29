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

#### Traversing a BST

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

#### Inserting into a BST

Inserting is similar to searching a BST,

1. Start at the root node
2. Compare the node with the value we want to insert

- Is the value lower than the cur node? Go left
- Is the value higher than the cur node? Go right

3. Continue until there is no right or left, then insert the new node

Here is an example:

```python
def insert(node, data):
    if node is None:
        return TreeNode(data)
    else:
        if data < node.data:
            node.left = insert(node.left, data)
        elif data > node.data:
            node.right = insert(node.right, data)
    return node
```

#### Finding the lowest value in a bst

Here's a little function to find the lowest value in a bst:

```python
def findLowestValueInBst(node):
  current_node = node
  while current_node.left is not None:
    current_node = current_node.left
  return current_node.data
```

#### Deleting a node in a bst

First of all, we need to search the bst to find the node to delete. Then there are 3 different ways we need to handle deleting a node depending where it is:

1. If leaf, remove it by removing the link
2. If one child, connect the parent of the node we want to delete to the node we will delete's child
3. If the node has both right and left child nodes: Find the node's in-order successor, change values with that node, then delete it.

In step 3 above, the successor we find will always be a leaf node, and because it is the node that comes right after the node we want to delete, we can swap values with it and delete it.
The in-order successor is the value that comes after it in an in-order search

Here's how we can delete in Python:

```python
def delete(node, data):
    if not node:
        return None

    if data < node.data:
        node.left = delete(node.left, data)
    elif data > node.data:
        node.right = delete(node.right, data)
    else:
        # Node with only one child or no child
        if not node.left:
            temp = node.right
            node = None
            return temp
        elif not node.right:
            temp = node.left
            node = None
            return temp

        # Node with two children, get the in-order successor
        node.data = findLowestValueInBst(node.right)
        node.right = delete(node.right, node.data)

    return node
```

### AVL BSTs

An AVL BST is a BST that automatically balances itself.
To restore balance to AVL trees we use rotations. Left rotations when they're too heavy on the right side and right rotations when they're too heavy on the left side.

The balance factor, each sub-trees height is stored in each node.
Balance factor values

- 0: The node is in balance.
- more than 0: The node is "right heavy".
- less than 0: The node is "left heavy".
  If the balance factor is less than -1, or more than 1, for one or more nodes in the tree, the tree is considered not in balance, and a rotation operation is needed to restore balance.

There are four different ways an AVL Tree can be out of balance, and each of these cases require a different rotation operation.

LL - The unbalanced node and its left child node are both left-heavy. - A single right rotation will fix this
RR - The unbalanced node and its right child node are both right-heavy. - A single left rotation will fix this
LR - The unbalanced node is left heavy, and its left child node is right heavy. - First do a left rotation on the left child node, then do a right rotation on the unbalanced node.
RL - The unbalanced node is right heavy, and its right child node is left heavy. - First do a right rotation on the right child node, then do a left rotation on the unbalanced node.


