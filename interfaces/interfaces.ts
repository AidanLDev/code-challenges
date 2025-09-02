export interface ListNode {
  val: number;
  next: ListNode | null;
}

export interface TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
}

export interface NArrayTreeNode {
  val: number;
  children: NArrayTreeNode[];
}
