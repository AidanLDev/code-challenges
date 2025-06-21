class Queue:
  def __init__(self):
    self.items = []
    
  def enqueue(self, value):
    self.items.append(value);
  
  def is_empty(self):
    return len(self.items) == 0
  
  def dequeue(self):
    if self.is_empty():
      return None
    return self.items.pop(0)
  
  def peak(self):
    if self.is_empty():
      return None
    return self.items[0]
  
  def size(self):
    return len(self.items)
  
cool_queue = Queue()
cool_queue.enqueue(22)
cool_queue.enqueue(382)
cool_queue.enqueue(343)
print("My queue after doing the enqueues: ", cool_queue.items)

print("peak(): ", cool_queue.peak())
print("dequeue(): ", cool_queue.dequeue())
print("My queue after doing a dequeue: ", cool_queue.items)
print("isEmpty?: ", cool_queue.is_empty())
print("Doing 2 more dequeues")
cool_queue.dequeue()
cool_queue.dequeue()
print("Is empty??: ", cool_queue.is_empty());

