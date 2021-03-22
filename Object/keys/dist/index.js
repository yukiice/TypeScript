"use strict";
exports.__esModule = true;
var arr = ['yukiice', 'tom', 'jerry'];
// 普通遍历
console.log(Object.keys(arr), '普通数组');
var obj = {
    name: 'yukiice',
    age: 15,
    from: 'china'
};
console.log(Object.keys(obj), '类数组对象');
// 拥有不可枚举属性的对象
var myobj = Object.create({}, {
    getfoo: {
        value: function (foo) { return this.foo = foo; }
    }
});
console.log(Object.keys(myobj), '赋值前');
// 给其赋值
myobj.foo = 1;
//  or
myobj.getfoo(222);
console.log(Object.keys(myobj), '赋值后');
