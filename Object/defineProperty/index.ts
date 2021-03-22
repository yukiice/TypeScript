const a: any = new Object();
let names: string = "yukiice";

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
  enumerable: true,
});
Object.defineProperty(a, "name", {
  value: "yukiicename",
  enumerable: true,
});

for (let q in a) {
  console.log(
    q,
    `
    for...in 循环结果`
  );
}

console.log(Object.keys(a), `
Object.keys()返回的键名数组`);



export {};
