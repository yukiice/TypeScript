"use strict";
exports.__esModule = true;
var obj = {
    a: 'a',
    b: 'b',
    c: function (n) {
        console.log(n);
    }
};
var b = Object.create(obj, {
    "title": {
        value: 'holo'
    }
});
console.log(obj);
console.log(b);
b.c('holo');
