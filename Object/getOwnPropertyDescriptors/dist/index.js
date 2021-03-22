"use strict";
exports.__esModule = true;
var q = {
    name: "value"
};
var qs = Object.assign({}, q);
console.log(qs);
var qss = Object.create(Object.getPrototypeOf(q), Object.getOwnPropertyDescriptors(q));
console.log(qss);
// 创建子类
// 原方法
function superClass() { }
superClass.prototype = {
// 在这里定义子类和方法
};
// 用 getOwnPropertyDescriptors
function subClass() { }
subClass.prototype = Object.create(superClass.prototype, Object.getOwnPropertyDescriptors({
// 这这里定义子类和方法
}));
