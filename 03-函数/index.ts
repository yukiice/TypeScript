// 匿名函数
let fun = function():number{  //这里限定了返回的类型
    return 123
}

fun()
console.log(fun())



// ts中定义方法传参


function fun1(name:string,age:number):string{
    return `${name}---${age}`
}

console.log(fun1('小花',20))


// 没有返回值的时候
function fun2():void{
    console.log('fun2')
}

fun2()


// 这里还可以做可选参数 可以给默认参数  age?:number 换成 age:number=20
function fun3(name:string,age?:number):string{
if (age) {
    return `${name}---${age}`
}else{
    return `${name}---不用传入age`
}
}

console.log(fun3('花花'))  //没有传入age

console.log(fun3('花花',20))  //传入了age


