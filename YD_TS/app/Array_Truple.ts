let arr:number[]  = [1,23,4]
let arr1 = new Array<number>(4)
console.log(arr1)
interface NumberArray {
    [index:number]:number;
}

const arr3:NumberArray = [1,2,5,6]
console.log(arr3)

// 类数组
function sum(){
    let args:IArguments = arguments
    console.log(Object.prototype.toString.call(args))
}
sum()

// 元祖
let tuple:[number,string,boolean]  = [1,'2',false]

function useFetch(){
    const res:string = 'yukiice'
    const age:number = 30
    return tuplify(10,20)
}

function tuplify<T extends unknown[]>(...elements:T){
    return elements
}

const [res,age] = useFetch()

console.log(res)
console.log(age)
