"use strict";
exports.__esModule = true;
var arr = [1, 2, 4, 5, 6, 8, 3, 5];
var qqq = arr.sort(function (a, b) {
    return a - b;
});
console.log(qqq, '简单排序');
var items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic" },
    { name: "Zeros", value: 37 },
];
var sort = items.sort(function (a, b) {
    return a.value - b.value;
});
console.log(sort, '正向排序');
var unsort = items.sort(function (a, b) {
    return b.value - a.value;
});
console.log(unsort, '反向排序');
