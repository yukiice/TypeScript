"use strict";
exports.__esModule = true;
var obj = {
    name: 'yukiice',
    age: 15
};
var des = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(des.configurable);
console.log(des.value);
console.log(des.age, '但不能继承');
