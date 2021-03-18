"use strict";
exports.__esModule = true;
var arr = [1, 2, 3, 4, 5, 6];
var even = arr.some(function (x) {
    return x > 7;
});
var even1 = arr.some(function (x) {
    return x > 4;
});
console.log(even, '没有元素通过测试');
console.log(even1, '至少有一个元素通过测试');
