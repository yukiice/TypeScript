// Map 转换为 Object
const entries = new Map([["yukiice",'name'],["age","1"]])

console.log(Object.fromEntries(entries))

// Array 转换为 Object

const arr:[string,string][] = [['1','q1'],['2','q2'],['3','q3']]

const obj:object = Object.fromEntries(arr)

console.log(obj)

export {}