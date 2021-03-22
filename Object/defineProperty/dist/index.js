"use strict";
exports.__esModule = true;
var a = new Object();
var names = "yukiice";
// // 创建属性
// Object.defineProperty(a,'name',{
//     value:names,
//     enumerable:true,
//     writable:true,
//     configurable:true
// })
// console.log(a.name,'数据描述符')
// Object.defineProperty(a,'title',{
//     get(){
//         return names
//     },
//     set(newName){
//         names = newName
//     },
//     enumerable:true,
//     configurable:true,
// })
// console.log(a.title,'存取描述符')
Object.defineProperty(a, "title", {
    value: "yukiicetitle",
    enumerable: true
});
Object.defineProperty(a, "name", {
    value: "yukiicename",
    enumerable: true
});
for (var q in a) {
    console.log(q, "\n    for...in \u5FAA\u73AF\u7ED3\u679C");
}
console.log(Object.keys(a), "\nObject.keys()\u8FD4\u56DE\u7684\u952E\u540D\u6570\u7EC4");
