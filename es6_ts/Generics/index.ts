function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap(["1", 10]);

interface Lengths {
  length: number;
}

// 泛型有约束能力，在函数内部使用泛型变量的时候，由于不知道它是哪种类型。所以是不能随意操作它的属性或者方法的
function q<T extends Lengths>(ak: T): T {
  console.log(ak.length);
  return ak;
}

q({ length: 1 });




// 下面这是两种方式


// interface Q {
//   <T>(length: number, T): Array<T>;
// }

interface Q<T> {
    (length: number, value:T): Array<T>;
  }
  
  let akk: Q<string>;
  akk = <T>(length: number, value: T): Array<T> => {
    let res: T[] = [];
    for (let i = 0; i < length; i++) {
      res[i] = value;
    }
    return res;
  };
  console.log(akk(3, '111'));
