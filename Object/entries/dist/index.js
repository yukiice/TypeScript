"use strict";
exports.__esModule = true;
var obj = {
    name: 'yukiice',
    age: 18,
    text: 'holo'
};
console.log(Object.entries(obj));
for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key + "   " + value);
}
var qs = new Map(Object.entries(obj));
console.log(qs);
