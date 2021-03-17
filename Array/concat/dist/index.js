"use strict";
exports.__esModule = true;
var a = [1, 2, 3, 4, 5];
var b = [6, 4, 23, 5, 6, 7];
var q = Array.from(new Set(a.concat(b)));
console.log(q);
var c = a.concat();
console.log(c);
