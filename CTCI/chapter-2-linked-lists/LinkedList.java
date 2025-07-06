public class LinkedList {
  class Node {
    int data;
    Node next = null;

    public Node(int d) {
      data = d;
    }

    void appendToTail(int d) {
      Node end = new Node(d);
      Node n = this;
      while (n.next != null) {
        n = n.next;
      }
      n.next = end;
    }

    Node deleteNode(Node head, int d) {
      Node n = head;
      if (n.data == d) {
        // To delete the head just return head.next
        return head.next;
      }
      while (n.next != null) {
        if (n.next.data == d) {
          n.next = n.next.next;
          return head;
        }
        n = n.next;
      }
      return head;
    }

    void printList() {
      Node n = this;
      while (n.next != null) {
        System.out.println(n.data + " ");
        n = n.next;
      }
    }
  }

  public static void main(String[] args) {
    LinkedList list = new LinkedList();
    Node head = list.new Node(1);
    head.appendToTail(2);
    head.appendToTail(3);
    head.appendToTail(4);

    System.out.println("OriginalList: ");
    head.printList();

    head = head.deleteNode(head, 3);
    System.out.println("List after deleting 3");
    head.printList();

    head = head.deleteNode(head, 1);
    System.out.println("List after deleting 1");
    head.printList();

  }

}