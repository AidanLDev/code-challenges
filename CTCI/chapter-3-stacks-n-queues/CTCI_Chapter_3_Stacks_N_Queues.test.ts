import { describe, it, expect } from "@jest/globals";

import {
  SingleArrayThreeStacks,
  TrackCurMin,
  StackOfPlates,
  MyQueue,
  sortStack,
} from "./CTCI_Chapter_3_Stacks_N_Queues";

describe.skip("CTCI 3.1 SingleArrayThreeStacks", () => {
  it("pushes and pops correctly for stack 1", () => {
    const stacks = new SingleArrayThreeStacks(3);
    stacks.push(1, 10);
    stacks.push(1, 20);
    expect(stacks.pop(1)).toBe(20);
    expect(stacks.pop(1)).toBe(10);
    expect(stacks.pop(1)).toBe(-1); // underflow
  });

  it("pushes and pops correctly for stack 2", () => {
    const stacks = new SingleArrayThreeStacks(2);
    stacks.push(2, 100);
    stacks.push(2, 200);
    expect(stacks.pop(2)).toBe(200);
    expect(stacks.pop(2)).toBe(100);
    expect(stacks.pop(2)).toBe(-1);
  });

  it("pushes and pops correctly for stack 3", () => {
    const stacks = new SingleArrayThreeStacks(1);
    stacks.push(3, 999);
    expect(stacks.pop(3)).toBe(999);
    expect(stacks.pop(3)).toBe(-1);
  });

  it("does not allow overflow in any stack", () => {
    const stacks = new SingleArrayThreeStacks(2);
    expect(stacks.push(1, 1)).toBeUndefined();
    expect(stacks.push(1, 2)).toBeUndefined();
    expect(stacks.push(1, 3)).toBe(-1); // overflow
    expect(stacks.push(2, 4)).toBeUndefined();
    expect(stacks.push(2, 5)).toBeUndefined();
    expect(stacks.push(2, 6)).toBe(-1);
    expect(stacks.push(3, 7)).toBeUndefined();
    expect(stacks.push(3, 8)).toBeUndefined();
    expect(stacks.push(3, 9)).toBe(-1);
  });

  it("isEmpty works for all stacks", () => {
    const stacks = new SingleArrayThreeStacks(2);
    expect(stacks.isEmpty(1)).toBe(true);
    stacks.push(1, 1);
    expect(stacks.isEmpty(1)).toBe(false);
    stacks.pop(1);
    expect(stacks.isEmpty(1)).toBe(true);
  });

  it("returns -1 for invalid stack numbers", () => {
    const stacks = new SingleArrayThreeStacks(2);
    expect(stacks.push(0, 1)).toBe(-1);
    expect(stacks.push(4, 1)).toBe(-1);
    expect(stacks.pop(0)).toBe(-1);
    expect(stacks.pop(4)).toBe(-1);
    expect(stacks.isEmpty(0)).toBe(-1);
    expect(stacks.isEmpty(4)).toBe(-1);
  });
});

describe.skip("CTCI 3.2 TrackCurMin", () => {
  it("returns -1 for min on empty stack", () => {
    const stack = new TrackCurMin();
    expect(stack.min()).toBe(-1);
  });

  it("pushes and pops correctly, min tracks minimum", () => {
    const stack = new TrackCurMin();
    stack.push(5);
    expect(stack.min()).toBe(5);
    stack.push(3);
    expect(stack.min()).toBe(3);
    stack.push(7);
    expect(stack.min()).toBe(3);
    stack.push(2);
    expect(stack.min()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.min()).toBe(3);
    expect(stack.pop()).toBe(7);
    expect(stack.min()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.min()).toBe(5);
    expect(stack.pop()).toBe(5);
    expect(stack.min()).toBe(-1);
  });

  it("handles duplicate minimums correctly", () => {
    const stack = new TrackCurMin();
    stack.push(4);
    stack.push(2);
    stack.push(2);
    expect(stack.min()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.min()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.min()).toBe(4);
  });

  it("isEmpty works as expected", () => {
    const stack = new TrackCurMin();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});

describe.skip("CTCI 3.3 StackOfPlates", () => {
  it("pushes and pops correctly with single stack", () => {
    const stacks = new StackOfPlates(3);
    stacks.push(1);
    stacks.push(2);
    stacks.push(3);
    expect(stacks.pop()).toBe(3);
    expect(stacks.pop()).toBe(2);
    expect(stacks.pop()).toBe(1);
    expect(stacks.pop()).toBe(-1); // underflow
  });

  it("creates new stacks when threshold is reached", () => {
    const stacks = new StackOfPlates(2);
    stacks.push(10);
    stacks.push(20);
    stacks.push(30); // should create new stack
    stacks.push(40);
    expect(stacks.pop()).toBe(40);
    expect(stacks.pop()).toBe(30);
    expect(stacks.pop()).toBe(20);
    expect(stacks.pop()).toBe(10);
    expect(stacks.pop()).toBe(-1);
  });

  it("popAt works for specific sub-stack", () => {
    const stacks = new StackOfPlates(2);
    stacks.push(1);
    stacks.push(2);
    stacks.push(3); // new stack
    stacks.push(4);
    expect(stacks.popAt(0)).toBe(2);
    expect(stacks.popAt(1)).toBe(4);
    expect(stacks.popAt(1)).toBe(3);
    expect(stacks.popAt(0)).toBe(1);
    expect(stacks.popAt(0)).toBe(-1);
  });

  it("isEmpty works as expected", () => {
    const stacks = new StackOfPlates(2);
    expect(stacks.isEmpty()).toBe(true);
    stacks.push(5);
    expect(stacks.isEmpty()).toBe(false);
    stacks.pop();
    expect(stacks.isEmpty()).toBe(true);
  });

  it("popAt returns -1 for invalid index or empty", () => {
    const stacks = new StackOfPlates(2);
    expect(stacks.popAt(0)).toBe(-1);
    stacks.push(1);
    expect(stacks.popAt(2)).toBe(-1);
  });
});

describe.skip("CTCI 3.4 moveDisks (Towers of Hanoi)", () => {
  function getMoves(numberOfDisks: number): string[] {
    const moves: string[] = [];
    const originalLog = console.log;
    console.log = (msg: string) => moves.push(msg);
    try {
      const { moveDisks } = require("./CTCI_Chapter_3_Stacks_N_Queues");
      moveDisks(numberOfDisks);
    } finally {
      console.log = originalLog;
    }
    return moves;
  }

  it("solves Towers of Hanoi for 3 disks", () => {
    const moves = getMoves(3);
    expect(moves.length).toBe(7);
    expect(moves).toEqual([
      "Move disk 1 from rod1 to rod3",
      "Move disk 2 from rod1 to rod2",
      "Move disk 1 from rod3 to rod2",
      "Move disk 3 from rod1 to rod3",
      "Move disk 1 from rod2 to rod1",
      "Move disk 2 from rod2 to rod3",
      "Move disk 1 from rod1 to rod3",
    ]);
  });

  it("solves Towers of Hanoi for 4 disks", () => {
    const moves = getMoves(4);
    expect(moves.length).toBe(15);
    expect(moves[0]).toBe("Move disk 1 from rod1 to rod2");
    expect(moves[14]).toBe("Move disk 1 from rod2 to rod3");
    expect(moves).toEqual([
      "Move disk 1 from rod1 to rod2",
      "Move disk 2 from rod1 to rod3",
      "Move disk 1 from rod2 to rod3",
      "Move disk 3 from rod1 to rod2",
      "Move disk 1 from rod3 to rod1",
      "Move disk 2 from rod3 to rod2",
      "Move disk 1 from rod1 to rod2",
      "Move disk 4 from rod1 to rod3",
      "Move disk 1 from rod2 to rod3",
      "Move disk 2 from rod2 to rod1",
      "Move disk 1 from rod3 to rod1",
      "Move disk 3 from rod2 to rod3",
      "Move disk 1 from rod1 to rod2",
      "Move disk 2 from rod1 to rod3",
      "Move disk 1 from rod2 to rod3",
    ]);
  });
});

describe.skip("CTCI 3.5 implement a queue using two stacks", () => {
  it("Peak correctly finds the first element pushed onto the queue (1)", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.peak()).toBe(1);
  });
  it("Pops out the first item added to the queue and then correctly peaks the 2nd item that was added (2)", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop()).toBe(1);
    expect(queue.peak()).toBe(2);
  });
  it("Should return -1 as there are no more items left to pop or peak", () => {
    const queue = new MyQueue();
    expect(queue.pop()).toBe(-1);
    expect(queue.peak()).toBe(-1);
  });
});

describe("CTCI 3.6 Implement a method to sort numbers in ascending order using stack methods", () => {
  it("Sorts [3, 6, 1] as [1, 3, 6]", () => {
    const stack = [3, 6, 1];
    expect(sortStack(stack)).toEqual([1, 3, 6]);
  });
  it("Sorts, [7, 2, 9, 1, 5, 10, 3, 8, 4, 6] to be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    const stack = [7, 2, 9, 1, 5, 10, 3, 8, 4, 6];
    expect(sortStack(stack)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
