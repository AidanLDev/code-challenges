// 3.1 Describe how you could use a single array to implement three stacks
class SingleArrayThreeStacks {
  private stack: any[];

  private stackOneTop;
  private readonly stackOneStartIdx;
  private readonly stackOneEndIdx;

  private stackTwoTop;
  private readonly stackTwoStartIdx;
  private readonly stackTwoEndIdx;

  private stackThreeTop;
  private readonly stackThreeStartIdx;
  private readonly stackThreeEndIdx;

  constructor(stackSize: number) {
    this.stack = Array(stackSize).fill(undefined);

    this.stackOneTop = -1;
    this.stackOneStartIdx = 0;
    this.stackOneEndIdx = stackSize - 1;

    this.stackTwoTop = -1;
    this.stackTwoStartIdx = stackSize;
    this.stackTwoEndIdx = stackSize * 2 - 1;

    this.stackThreeTop = -1;
    this.stackThreeStartIdx = stackSize * 2;
    this.stackThreeEndIdx = stackSize * 3 - 1;
  }

  isStackNumberValid(stackNumber: number) {
    if (stackNumber > 3 || stackNumber < 1) {
      console.error("There are only 3 stacks");
      return false;
    }
    return true;
  }

  push(stackNumber: number, numberToAdd: number) {
    if (!this.isStackNumberValid(stackNumber)) return -1;
    if (stackNumber === 1) {
      if (this.stackOneTop + this.stackOneStartIdx >= this.stackOneEndIdx) {
        console.error("Stack 1 is full");
        return -1;
      }
      this.stackOneTop++;
      this.stack[this.stackOneStartIdx + this.stackOneTop] = numberToAdd;
    } else if (stackNumber === 2) {
      if (this.stackTwoTop + this.stackTwoStartIdx >= this.stackTwoEndIdx) {
        console.error("Stack 2 is full");
        return -1;
      }
      this.stackTwoTop++;
      this.stack[this.stackTwoStartIdx + this.stackTwoTop] = numberToAdd;
    } else if (stackNumber === 3) {
      if (
        this.stackThreeTop + this.stackThreeStartIdx >=
        this.stackThreeEndIdx
      ) {
        console.error("Stack 3 is full");
        return -1;
      }
      this.stackThreeTop++;
      this.stack[this.stackThreeStartIdx + this.stackThreeTop] = numberToAdd;
    }
  }

  isEmpty(stackNumber: number) {
    if (!this.isStackNumberValid(stackNumber)) return -1;
    if (stackNumber === 1) {
      if (this.stackOneTop === -1) return true;
    } else if (stackNumber === 2) {
      if (this.stackTwoTop === -1) return true;
    } else if (stackNumber === 3) {
      if (this.stackThreeTop === -1) return true;
    }
    return false;
  }

  pop(stackNumber: number): number {
    if (!this.isStackNumberValid(stackNumber)) return -1;

    let numberToReturn: number = -1;
    if (stackNumber === 1) {
      if (this.isEmpty(1)) return -1;
      numberToReturn = this.stack[this.stackOneStartIdx + this.stackOneTop];
      this.stack[this.stackOneStartIdx + this.stackOneTop] = undefined;
      this.stackOneTop--;
    } else if (stackNumber === 2) {
      if (this.isEmpty(2)) return -1;
      numberToReturn = this.stack[this.stackTwoStartIdx + this.stackTwoTop];
      this.stack[this.stackTwoStartIdx + this.stackTwoTop] = undefined;
      this.stackTwoTop--;
    } else if (stackNumber === 3) {
      if (this.isEmpty(3)) return -1;
      numberToReturn = this.stack[this.stackThreeStartIdx + this.stackThreeTop];
      this.stack[this.stackThreeStartIdx + this.stackThreeTop] = undefined;
      this.stackThreeTop--;
    }
    return numberToReturn;
  }
}

export { SingleArrayThreeStacks };
// 3.2 How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in o(1) time.

/* 3.3. Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks, and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop( should return the same value as it would if there is just 1 stack))

FOLLOW UP:

Implement a function popAt(int index) which performs a pop operation on a specific sub-stack
*/

/*
3.4 In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of different sizes which can slide onto any tower. The puzzle starts when discs sorted in ascending order of size form top to bottom (e.g., each disk sits on top of an even larger one). You have the following constraints:

A: only one disk can be moved at a time

B: A disk is slid off the top of one rod onto the next rod

C: A disk can only be placed on top of a larger disk

Write a program to move the disks from the first rod to the last rod using Stacks.

*/

// 3.5 Implement a MyQueue class which implements a queue using two stacks

// 3.6 Write a program to sort and stack in ascending order. You should not make any assumptions about how the stack is implemented. The following are the only functions that should be used to write this program: push | pop | peek | isEmpty.
