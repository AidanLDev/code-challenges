class Node:
  def __init__(self, data):
    self.data = data
    self.next = None
  
# Traversal
def traverse(head):
  current_node = head
  while current_node:
    print("Current node is: ", current_node.data)
    current_node = current_node.next
  
node1 = Node(7)
node2 = Node(11)
node3 = Node(3)
node4 = Node(2)
node5 = Node(9)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

traverse(node1)

# Delete a node
def delete(head, value):
  # If the head node itself holds the value to be deleted
  if head and head.data == value:
    return head.next
  current_node = head
  while current_node and current_node.next:
    if current_node.next.data == value:
      current_node.next = current_node.next.next
      return head
    current_node = current_node.next
  # Value not found, return original head
  return head

