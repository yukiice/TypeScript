const obj:any = {
    name:'yukiice',
    age:15
}

const des:any =  Object.getOwnPropertyDescriptor(obj,'name') 

console.log(des.configurable)

console.log(des.value)

console.log(des.age,'但不能继承')

export {}