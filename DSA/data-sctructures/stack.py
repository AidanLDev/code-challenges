# Stack using built in list methods
stack = []

# push
stack.append(1)
stack.append(2)
stack.append(42)

# peak
print(stack[len(stack) - 1])

# pop
print(stack.pop())

# is_empty
print("Is empty?: ", not bool(stack))

# size
print("Size of stack: ", len(stack))

# building our own stack class
class Stack:
  def __init__(self):
    self.class_stack= []
  
  def push(self, value):
      self.class_stack.append(value)

  def is_empty(self):
    return not bool(self.class_stack)

  def peak(self):
    if not self.is_empty():
      return self.class_stack[len(self.class_stack) - 1]
    else:
      return None
    
  def pop(self):
    if not self.is_empty():
      return self.class_stack.pop()
    else:
      return None
    
  def size(self):
    return len(self.class_stack)

my_stack = Stack()

my_stack.push(99)
my_stack.push(100)
my_stack.push(101)

print("Peak of stack: ", my_stack.peak())

print("Popped value: ", my_stack.pop())

print("Is stack empty?: ", my_stack.is_empty())
print("Size of stack: ", my_stack.size())