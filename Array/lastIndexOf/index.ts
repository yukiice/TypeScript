let arr:number[] = [1,2,3,4,5,2,6]

console.log(arr.lastIndexOf(2),'只传一个元素')

console.log(arr.lastIndexOf(2,5),'从指定下标为5的开始')

console.log(arr.lastIndexOf(8),'查找不存在的元素')

console.log(arr.lastIndexOf(2,-10),'负值大小大于数组长度的绝对值')
console.log(arr.lastIndexOf(2,10),'查找位置大于等于数组长度的绝对值，也就是全部查找')

export {}