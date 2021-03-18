let arr:Array<number> = [ 1,2,3,4,5,6]

const even:boolean = arr.some((x)=>{
    return x > 7
})
const even1:boolean = arr.some((x)=>{
    return x > 4
})

console.log(even,'没有元素通过测试')

console.log(even1,'至少有一个元素通过测试')

export {}