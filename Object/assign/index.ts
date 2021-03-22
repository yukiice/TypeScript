interface Obj{
    [name:string] : string | number
}

const obj:Obj = {
    id:1,
    name:'yukiice',
    age:15,
    guagua:666
}

// const obj1:Obj = {
//     id:2,
//     name:'Tom',
//     age:18,
//     guagua:666,
//     title:'halo'
// }

// console.log(obj,'原目标对象')
// console.log(obj1,'原源对象')
// console.log(Object.assign(obj,obj1),'Objcect.assign()返回的对象')
// console.log(obj,'之后的目标对象')
// console.log(obj1,'之后的源对象')

console.log(obj,'源对象')
console.log(`V
V
V`)
console.log(Object.assign({},obj),'浅拷贝后的实例')
console.log(`A
A
A`)
console.log(obj,'浅拷贝之后的源对象')

