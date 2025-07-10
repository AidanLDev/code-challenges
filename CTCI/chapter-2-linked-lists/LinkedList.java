import java.util.ArrayList;

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
      while (n != null) {
        System.out.println(n.data + " ");
        n = n.next;
      }
    }
  }

  public static void addDataToList(Node head) {
    head.appendToTail(2);
    head.appendToTail(3);
    head.appendToTail(4);
    head.appendToTail(5);

    System.out.println("OriginalList: ");
    head.printList();
  }

  public static int getListSize(Node head) {
    int listSize = 1;
    while (head.next != null) {
      listSize += 1;
      head = head.next;
    }
    return listSize;
  }

  // 2.1 write code to remove duplicates from an unsorted list
  public static void removeDuplicates(Node head) {
    ArrayList<Integer> seenNumbers = new ArrayList<>();
    Node cur = head;
    seenNumbers.add(cur.data);
    while (cur.next != null) {
      if (seenNumbers.contains(cur.next.data)) {
        cur.next = cur.next.next; // If next has already been found, set cur's next to next.next to skip over
        // next, breaking it from the link
      } else {
        seenNumbers.add(cur.next.data);
        cur = cur.next;
      }
    }
  }

  // 2.1.1 (follow up) how would you solve this problem if a temporary buffer is
  // not allowed?
  public static void removeDuplicatesNoBuffer(Node head) {
    Node cur = head;
    while (cur.next != null) {
      int curValue = cur.data;
      Node runner = cur;
      while (runner.next != null) {
        if (runner.next.data == curValue) {
          // break next link
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      cur = cur.next;
    }
  }

  // 2.2 Implement an algorithm to find the nth to last element of a singly linked
  // list
  public static int findNthLastElement(Node head, int nthEl) {
    Node cur = head;
    int listSize = getListSize(head);
    int elementToFindIndex = listSize - nthEl;
    for (int i = 1; i <= elementToFindIndex; i++) {
      cur = cur.next;
    }
    return cur.data;
  }

  // 2.3 Implement an algorithm to delete a node in the middle of a single linked
  // list, given only access to that node
  // 2.3 Example - Input the node 'c' from the linked list a->b->c->d->e
  // 2.3 Result - Nothing returned but new linked list looks like a->b->d->e
  public static void deleteMiddleElement(Node head) {
    int middleIndex = getListSize(head) / 2;
    int curIndex = 1;
    Node cur = head;
    while (curIndex < middleIndex) {
      cur = cur.next;
      curIndex += 1;
    }
    cur.next = cur.next.next;
  }

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
    Node list1 = list.new Node(3);
    Node list2 = list.new Node(5);

    list1.appendToTail((1));
    list1.appendToTail((5));

    list2.appendToTail((9));
    list2.appendToTail((2));

    list1.printList();
    list2.printList();
  }

}