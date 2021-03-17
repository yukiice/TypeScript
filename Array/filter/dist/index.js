"use strict";
exports.__esModule = true;
var arr = [1, 2, 3, 4, 5, 6, 7];
var q = arr.filter(function (x) {
    return x < 5;
});
console.log(arr, '原数组');
console.log('----------------------');
console.log(q, '新数组');
