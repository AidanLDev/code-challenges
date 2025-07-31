# Stacks n Queue problems

3.1 Describe how you could use a single array to implement three stacks

3.2 How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in o(1) time.

3.3. Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks, and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop( should return the same value as it would if there is just 1 stack))

FOLLOW UP:

Implement a function popAt(int index) which performs a pop operation on a specific sub-stack

3.4 In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of different sizes which can slide onto any tower. The puzzle starts when discs sorted in ascending order of size form top to bottom (e.g., each disk sits on top of an even larger one). You have the following constraints:

A: only one disk can be moved at a time

B: A disk is slid off the top of one rod onto the next rod

C: A disk can only be placed on top of a larger disk

Write a program to move the disks from the first rod to the last rod using Stacks.

3.5 Implement a MyQueue class which implements a queue using two stacks

3.6 Write a program to sort and stack in ascending order. You should not make any assumptions about how the stack is implemented. The following are the only functions that should be used to write this program: push | pop | peek | isEmpty.
