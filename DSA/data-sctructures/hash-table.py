my_hash_set = [[None],[None],[None],[None],[None],[None],[None],[None],[None],[None]]

def hash_function(value):
  sum_of_chars = 0
  for char in value:
    sum_of_chars += ord(char)

  return sum_of_chars % 10

def contains(name):
  index = hash_function(name)
  bucket = my_hash_set[index]
  return name in bucket 

def add(name):
  if my_hash_set[hash_function(name)][0] != None:
    my_hash_set[hash_function(name)].append(name) 
  else:
    my_hash_set[hash_function(name)][0] = name

names = ["Aidan", "Siri", "Jones", "Stuart", "Bob"]
for name in names:
  add(name)

print(my_hash_set);
print("does it have Siri in?: ", contains("Siri"))