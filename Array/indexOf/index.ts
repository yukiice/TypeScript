let arr:number[] = [1,2,3,4,5,4]

console.log(arr.indexOf(1),'存在')

console.log(arr.indexOf(10),'不存在')

console.log(arr.indexOf(1,5),'指定索引，不存在')

console.log(arr.indexOf(2,1),'指定索引，存在')

console.log(arr.indexOf(5,7),'指定索引，但索引大于数组长度，不存在')

console.log(arr.indexOf(1,-1),'指定索引,负数,不存在')

console.log(arr.indexOf(5,-3),'指定索引，负数，存在')

export {}