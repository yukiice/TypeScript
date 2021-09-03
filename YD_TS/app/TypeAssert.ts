/*
 * @Author: your name
 * @Date: 2021-08-01 19:18:16
 * @LastEditTime: 2021-08-15 00:38:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/app/TypeAssert.ts
 */
// 类型断言
function getLength(str: string | number): number {
  if (<string>str) {
    return (<string>str).length;
  } else {
    return str.toString().length;
  }
}

console.log(getLength("5"));
console.log(getLength(5));

type Name = string;
type NameResolve = () => string;

type NameAndResolve = Name | NameResolve;

function getLength2(n: NameAndResolve): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

console.clear();

// 类型推论

// 可选参数和剩余参数
const getSum = (
  arr: number[],
  callback: (...args: number[]) => number
): number => {
  return callback(...arr);
};

const ress = getSum([1, 2], (...args: number[]): number => args.reduce((a, b) => a + b, 0));
console.log(ress)

// 函数参数双向协变
let funcA = (arg:number | string):void =>{}
let funcB  = (arg:number):void => {}

// funcA = funcB

// 函数重载

