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

print("Going to search for: " + str(8) + " in our BST")
searchBst(bstRoot, 8)