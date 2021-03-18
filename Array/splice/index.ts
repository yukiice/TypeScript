// 只有起始位置
let arr:Array<number> = [1,2,3,4,5]
arr.splice(1)

console.log(arr,'只有起始位置')


let arr1:Array<number> = [1,2,3,4,5]
arr1.slice(1,2)

console.log(arr1,'包含删除个数')

let arr2:any = [1,2,3,4,5]
const q:number = 12
arr2.splice(1,2,q)

console.log(arr2,'删除两个并插入指定位置')


let arr3:any = [1,2,3,4,5]
const q1:number = 12
arr3.splice(0,1,q1)

console.log(arr3,'插入到首位')

let arr4:any = [1,2,3,4,5]
const q2:number = 12
arr4.splice(-1,1,q1)

console.log(arr4,'插入到末位')


export {}