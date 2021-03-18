let arr:Array<number> = [1,2,3,4,5,6,7]

console.log(arr.slice(),'浅拷贝例子')

console.log(arr.slice(1),'只传入起始位置')

console.log(arr.slice(1,2),'传入起始位置和终点');

console.log(arr.slice(1,-1),'传入负值')

export {}