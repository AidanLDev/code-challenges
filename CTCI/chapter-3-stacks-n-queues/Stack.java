public class Stack {
  public static class Node {
    Object data;
    Node next = null;

    public Node(Object d) {
      this.data = d;
    }
  }

  private Node top;

  public Object pop() {
    if (top != null) {
      Object item = top.data;
      top = top.next;
      return item;
    }

    return null;
  }

  public void push(Object item) {
    Node t = new Node(item);
    t.next = top;
    top = t;
  }

  public static void main(String[] args) {
    Stack stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    System.out.println(stack.pop());
    System.out.println(stack.pop());
    System.out.println(stack.pop());
  }
}