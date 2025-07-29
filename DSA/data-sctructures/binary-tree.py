class TreeNode:
  def __init__(self, data):
    self.data = data
    self.left = None 
    self.right = None

root = TreeNode("R")
nodeA = TreeNode("A")
nodeB = TreeNode("B")
nodeC = TreeNode('C')
nodeD = TreeNode('D')
nodeE = TreeNode('E')
nodeF = TreeNode('F')
nodeG = TreeNode('G')

root.left = nodeA
root.right = nodeB

nodeA.left = nodeC
nodeA.right = nodeD

nodeB.left = nodeE
nodeB.right = nodeF

nodeF.left = nodeG

# Test
def preOrderTraversal(node):
  if node is None:
    return
  print(node.data, end=", ")
  preOrderTraversal(node.left)
  preOrderTraversal(node.right)


def inOrderTraversal(node):
  if node is None:
    return
  inOrderTraversal(node.left)
  print(node.data, end=", ")
  inOrderTraversal(node.right)

def postOrderTraversal(node):
  if node is None:
    return
  postOrderTraversal(node.left)
  postOrderTraversal(node.right)
  print(node.data, end=", ")

def searchBst(node, target):
  print("Current value is: " + str(node.data))
  if node is None:
    return None
  elif node.data == target:
    return node
  elif target < node.data:
    return searchBst(node.left, target)
  else:
    return searchBst(node.right, target)
  
def insertBst(node, data):
    if node is None:
        return TreeNode(data)
    else:
        if data < node.data:
            node.left = insertBst(node.left, data)
        elif data > node.data:
            node.right = insertBst(node.right, data)
    return node

def findLowestValueInBst(node):
  current_node = node
  while current_node.left is not None:
    current_node = current_node.left
  return current_node.data

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

"""
print("Pre-order traversal results")
preOrderTraversal(root)

print("In-order traversoal results")
inOrderTraversal(root)

postOrderTraversal(root)
print("Post-order traversal results")
"""

bstRoot = TreeNode(13)
bstNodeSeven = TreeNode(7)
bstNodeThree = TreeNode(3)
bstNodeEight = TreeNode(8)
bstNodeFifteen = TreeNode(15)
bstNodeFourteen = TreeNode(14)
bstNodeNineteen = TreeNode(19)
bstNodeEighteen = TreeNode(18)

bstRoot.left = bstNodeSeven
bstRoot.right = bstNodeFifteen

bstNodeSeven.left = bstNodeThree
bstNodeSeven.right = bstNodeEight

bstNodeFifteen.left = bstNodeFourteen
bstNodeFifteen.right = bstNodeNineteen

bstNodeNineteen.left = bstNodeEighteen

preOrderTraversal(bstRoot)
print("BST preOrderTraversal")

inOrderTraversal(bstRoot)
print("BST inOrderTraversal")

postOrderTraversal(bstRoot)
print("BST postOrderTraversal")

print("Lowest value is: " + str(findLowestValueInBst(bstRoot)))