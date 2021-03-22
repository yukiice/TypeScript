"use strict";
exports.__esModule = true;
// Map 转换为 Object
var entries = new Map([["yukiice", 'name'], ["age", "1"]]);
console.log(Object.fromEntries(entries));
// Array 转换为 Object
var arr = [['1', 'q1'], ['2', 'q2'], ['3', 'q3']];
var obj = Object.fromEntries(arr);
console.log(obj);
