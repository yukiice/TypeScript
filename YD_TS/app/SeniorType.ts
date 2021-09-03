/*
 * @Author: your name
 * @Date: 2021-08-17 22:14:08
 * @LastEditTime: 2021-08-17 23:04:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/SeniorType.ts
 */

// 交叉类型 多个类型合并
const merageFunc = <T, S>(arg1: T, arg2: S): T & S => {
  let res = {} as T & S;
  res = Object.assign(arg1, arg2);
  return res;
};

console.log(merageFunc({ a: "2" }, { b: "3" }));

// 交叉类型  多个类型其一

const orFunc = (content: string | number | null): number => {
  if (typeof content === "string") {
    return content.length;
  } else if (typeof content === "number") {
    return content;
  } else {
    return 666;
  }
};

console.log(orFunc("hhe"), "传入了字符串");
console.log(orFunc(6), "传入了数字");
console.log(orFunc(null), "传入了null");

// 类型保护
const valueList: any[] = ["name", 2];

const getRandomValue = () => {
  const number = Math.random() * 10;
  if (number <= 5) {
    return valueList[0];
  } else {
    return valueList[1];
  }
};
const randomItem = getRandomValue();

function isString(value: number | string): value is string {
  return typeof value === "string";
}

if (isString(randomItem)) {
  console.log(randomItem.length);
} else {
  console.log(randomItem);
}
