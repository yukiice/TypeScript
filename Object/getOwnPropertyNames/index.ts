

let obj:object = {
    name:'yukiice',
    age:18,
    from:'henan'
}
let arr:string[] = ['tom','jerry','jack']
console.log(Object.getOwnPropertyNames(obj),'Object上的所有属性名')
console.log(Object.getOwnPropertyNames(arr),'Array上所有的属性名，包括length')


// 不可枚举属性

let objs = Object.create({},{
    getFoo:{
        value:function(){
            return this.foo;
        },
        enumerable:true,
    }
})

objs.foo = 1

console.log(objs.getFoo(),'objs上的属性')
console.log(objs.foo,'objs上的属性')

console.log(Object.getOwnPropertyNames(objs),'获得其所有的属性名')
export {}