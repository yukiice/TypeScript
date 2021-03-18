"use strict";
exports.__esModule = true;
var arr = [1, 2, 3, 4, 5];
arr.reduce(function (a, b, c) {
    console.log(a, b, c);
    return a + b;
}, 0);
var arr1 = ['name', 'age', 'long', 'short', 'long', 'name', 'age', 'name', 'long', 'short'];
arr1.reduce(function (al, cv) {
    console.log(al, cv);
    if (!al.includes(cv)) {
        al.push(cv);
    }
    return al;
}, []);
var res = arr1.reduce(function (pre, cur) {
    console.log(pre, cur);
    if (cur in pre) {
        pre[cur]++;
    }
    else {
        pre[cur] = 1;
    }
    return pre;
}, {});
console.log(res, '数组中每个元素出现的次数');
