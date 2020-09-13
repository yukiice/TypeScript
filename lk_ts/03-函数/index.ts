// 匿名函数
let fun = function (): number {  //这里限定了返回的类型
    return 123
}

fun()
console.log(fun())



// ts中定义方法传参


function fun1(name: string, age: number): string {
    return `${name}---${age}`
}

console.log(fun1('小花', 20))


// 没有返回值的时候
function fun2(): void {
    console.log('fun2')
}

fun2()


// 这里还可以做可选参数 可以给默认参数  age?:number 换成 age:number=20      -------- 这里的?代表这个是可选参数  给 =代表默认参数
function fun3(name: string, age?: number): string {
    if (age) {
        return `${name}---${age}`
    } else {
        return `${name}---不用传入age`
    }
}

console.log(fun3('花花'))  //没有传入age

console.log(fun3('花花', 20))  //传入了age



// 3-4  剩余参数

function sum(a: number, b: number, c: number, d: number): number {
    return a + b + c + d
}
console.log(sum(1, 2, 3, 4))


// 3-5 函数的重载
// ts中的重载，通过为同一个函数提供多个函数类型定义来试下多种功能的目的


// 如果es5中出现同名的方法，那么下面的会替换掉上面的方法

function arr(name: string): string

function arr(age: number): number

function arr(str: any): any {
    if (typeof str === 'string') {
        return 'string---' + str
    } else {
        return 'number---' + str
    }
}

console.log(arr(5))
console.log(arr('hello'))
// 这里相当于限制了数据传入的类型
// 比如
// console.log(arr(true))   这里就会报错




