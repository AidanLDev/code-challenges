# Graphs

## Traversing Graphs

To traverse graphs we usually use BFS or DFS, DFS usually by implementing a Stack and BFS by using a Queue.

### DFS

DFS traversal of a graph works by:

- Starting DFS traversal on a vertex
- Recursively traverse on each adjacent vertex unless it's already been visited

Here's a DFS implementation in Python:

```python
def dfs_util(self, v, visited):
visited[v] = True
print(self.vertex_data[v], end=' ')

      for i in range(self.size):
          if self.adj_matrix[v][i] == 1 and not visited[i]:
              self.dfs_util(i, visited)

def dfs(self, start_vertex_data):
visited = [False] \* self.size
start_vertex = self.vertex_data.index(start_vertex_data)
self.dfs_util(start_vertex, visited)
```
