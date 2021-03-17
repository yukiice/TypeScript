"use strict";
exports.__esModule = true;
var a = [1, 2, 3, 4, 5, 6];
var reduces = function (item) {
    return item < 3;
};
console.log(a.every(reduces));
