import { ListNode } from '../../interfaces/interfaces';

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  /*
      Traverse both linked lists and store their values in two arrays
      Reverse the arrays and sum the digits in the arrays
      Create a new linkedList with the sum array reversed (or go through the sum array back to front)
  */

  let listOneArray = [];
  let listTwoArray = [];

  let cur = l1;
  while (cur) {
    listOneArray.push(cur.val);
    cur = cur.next;
  }

  cur = l2;
  while (cur) {
    listTwoArray.push(cur.val);
    cur = cur.next;
  }

  let num1 = Number(listOneArray.reverse().join(''));
  let num2 = Number(listTwoArray.reverse().join(''));
  let sum = num1 + num2;

  console.log(num1);
  console.log(num2);
  console.log(sum);

  let sumArray = Array.from(sum.toString(), Number).reverse();

  console.log(sumArray);

  let sumList: ListNode = { val: null, next: null };

  for (let i = 0; i < sumArray.length; i++) {
    console.log('Adding: ', sumArray[i], ' to the list:');
    console.log(sumList);
    sumList.val = sumArray[i];
    sumList = sumList.next; // to the next part of sumList
  }

  return sumList;
}
