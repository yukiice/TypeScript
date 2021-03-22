"use strict";
exports.__esModule = true;
var obj = {
    property1: 0
};
obj.property1 = 40;
console.log(obj.hasOwnProperty('qqq'), '不存在的键');
console.log(obj.hasOwnProperty('property1'), '存在的键');
