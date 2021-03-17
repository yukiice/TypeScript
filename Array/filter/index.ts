const arr:number[] =  [1,2,3,4,5,6,7]

const q:number[] =  arr.filter(x=>{
    return x < 5
})

console.log(arr,'原数组')
console.log('----------------------')
console.log(q,'新数组')

export {}