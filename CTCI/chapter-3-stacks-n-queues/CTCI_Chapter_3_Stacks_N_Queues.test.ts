import { describe, it, expect } from "@jest/globals";

import {
  SingleArrayThreeStacks,
  TrackCurMin,
} from "./CTCI_Chapter_3_Stacks_N_Queues";

describe("CTCI 3.1 SingleArrayThreeStacks", () => {
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

describe("CTCI 3.2 TrackCurMin", () => {
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
