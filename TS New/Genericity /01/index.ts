function getMinArray(arr: number[]): number {
  let min = arr.slice().sort()[0];
  arr.forEach((item) => {
    if (item < min) {
      item = min;
    }
  });
  return min;
}

function getMinStingArray(arr: string[]): string {
  let min = arr.slice().sort()[0];
  arr.forEach((item) => {
    if (item < min) {
      item = min;
    }
  });
  return min;
}

function getMinArrayAsFx<T>(arr: T[]): T {
  let min = arr.slice().sort()[0];
  arr.forEach((item) => {
    if (item < min) {
      item = min;
    }
  });
  return min;
}

console.log(getMinArray([8, 2, 4, 6, 8, 5, 3]));
console.log(getMinStingArray(["e", "a", "b", "d"]));

console.log(
  getMinArrayAsFx<string>(["e", "a", "b", "d"])
);

console.log(
  getMinArrayAsFx<number>([8, 2, 4, 6, 8, 5, 3])
);

class getMinArrays<T> {
  public arr: T[] = [];
  constructor(arr: T[]) {
    this.arr = arr;
  }
  add(ele: T) {
    this.arr.push(ele);
  }
  min(): T {
    let min = this.arr.slice().sort()[0];
    this.arr.forEach((item) => {
      if (item < min) {
        min = item;
      }
    });
    return min;
  }
}

let obj = new getMinArrays<number>([]);

obj.add(5);
obj.add(7);
obj.add(2);

console.log(obj.min(), "最小的数字");
