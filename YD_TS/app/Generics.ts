/*
 * @Author: your name
 * @Date: 2021-08-02 16:20:08
 * @LastEditTime: 2021-08-03 14:30:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/app/Generics.ts
 */
// 泛型
interface LengthWise {
  length: number;
}

function indenify<T extends LengthWise>(arg: T) {
  console.log(arg.length);
  return arg;
}

indenify<string>("yukiice");
console.log(indenify<string>("halo"));

class GenericNumber<T> {
  zeroValue: T | undefined;
  constructor() {}
  add: ((x: T, y: T) => T) | undefined;
}

const genericNumber = new GenericNumber<number>();
genericNumber.zeroValue = 0;
genericNumber.add = (x, y) => {
  return x + y;
};

console.log(genericNumber.add(11, 55));

// 泛型和接口和类组合
interface Objs {
  name: string;
  type: number;
}
class Arrays<T extends Objs> {
  item: T[] = [];
}

console.clear();

//  new test

// let getArray: <T>(arg: T, times: number) => T[];
// getArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg);
// };

// interface getArray<T> {
//   (arg: T, times: number): T[];
//   array: T[];
// }

interface ValueLength{
    length:number
}
const getArray = <T extends ValueLength>(arg:T,times:number):T[] =>{
    return new Array(times).fill(arg)
}

console.log(getArray([1],5))
console.log(getArray('12',5))
console.log(getArray({length:5},5))


const getProps = <T,K extends keyof T>(obj:T,propName:K)=>{
    return obj[propName]
}

const objs = {
    a:'a',
    b:'b'
}

console.log(getProps(objs,'a'))





