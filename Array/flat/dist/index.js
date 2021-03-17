"use strict";
exports.__esModule = true;
var arr = [1, [2, 3, 4], [[[4]]]];
console.log(arr.flat(3));
var arr1 = [1, 2, 3, 4, [],];
console.log(arr1.flat());
