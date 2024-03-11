class MyHashSet {
  private hashSet: number[];
  constructor() {
    this.hashSet = [];
  }

  add(key: number): void {
    if (this.contains(key)) {
      return;
    }
    this.hashSet.push(key);
  }

  remove(key: number): void {
    let indexOfKey = this.hashSet.indexOf(key);
    if (indexOfKey !== -1) {
      this.hashSet.splice(indexOfKey, 1);
    }
  }

  contains(key: number): boolean {
    return this.hashSet.includes(key);
  }
}
