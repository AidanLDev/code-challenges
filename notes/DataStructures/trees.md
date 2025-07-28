# Trees

### BST

#### Traversal
There's two main ways to traverse trees, DFS (depth first search) which basically explores bottom first and then works its way up the tree. Then there's BFS (Breadth First Search) which explores more in a sideways way, going down one branch then then the next until the tree has been explored.

There are 3 different orders we can visit nodes using DFS:
- Pre-order
- In-order
- Post-order

##### Pre-order
This is done by visiting the root node first, then recersively pre-order traverse the left subtree, then the right one. The pre-order part comes from the fact we visit the node first then receruse