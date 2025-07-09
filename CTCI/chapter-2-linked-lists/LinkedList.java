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

  public static void addDataToList(Node head) {
    head.appendToTail(2);
    head.appendToTail(3);
    head.appendToTail(4);

    System.out.println("OriginalList: ");
    head.printList();
  }

  // 2.1 write code to remove duplicates from an unsorted list
  // 2.1.1 (follow up) how would you solve this problem if a temporary buffer is
  // not allowed?

  // 2.2 Implement an algorithm to find the nth to last element of a singly linked
  // list

  // 2.3 Implement an algorithm to delete a node in the middle of a single linked
  // list, given only access to that node
  // 2.3 Example - Input the node 'c' from the linked list a->b->c->d->e
  // 2.3 Result - Nothing returned but new linked list looks like a->b->d->e

  // 2.4 You have two numbers represented by a linked list where each node
  // contains a single digit. The digits are sorted in reverse order, such that
  // the 1's digit is at the head of the list. Write a function that adds two
  // numbers and returns the sum as a linked list
  // 2.4 Example - input (3->1->5)+(5->9->2)
  // Result - 8->0->8

  // 2.5 Given a circular linked list, implement an algorithm which returns node
  // at the beginning of the loop
  // 2.5 Example - a->b->c->d->e->c(same c as earlier)
  // 2.5 Result - c

  public static void main(String[] args) {
    LinkedList list = new LinkedList();
    Node head = list.new Node(1);
    addDataToList(head);
  }

}