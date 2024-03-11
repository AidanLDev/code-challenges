class MyHashMap {
  private hashMap: number[][];
  constructor() {
    this.hashMap = [[]];
  }

  put(key: number, value: number): void {
    for (let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i][0] === key) {
        console.log("put() - key exists, overwrite it's value");
        this.hashMap[i][1] = value;
        return;
      }
    }
    this.hashMap.push([key, value]);
  }

  get(key: number): number {
    let filteredMap = this.hashMap.filter((values, idx) => values[0] === key);
    if (filteredMap.length > 0) {
      return filteredMap[0][1];
    }
    return -1;
  }

  remove(key: number): void {
    for (let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i][0] === key) {
        this.hashMap.splice(i, 1);
      }
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
