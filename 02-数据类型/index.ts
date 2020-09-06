// 布尔
let flag: boolean = true

// ts定义数组

let arr: number[] = [1, 2, 6]

console.log(arr)

console.log(flag)

// 泛型写法
let arr1: Array<number> = [11, 50, 40]

console.log(arr1)

// 元组类型（tuple）  属于数组的一种
//这样就将数组的类型以及长度都做了限制

let arr3: [string, number, boolean] = ['2', 5, false]


console.log(arr3, 'this is arr3')


// 枚举类型  (enmu)

enum Flag { success = 1, error = 0 }

let flag1: Flag = Flag.success

console.log(flag1, 'this is flag1')


// 如果没有限制  会默认打印索引值  如果中间有赋值  那么会默认下一个索引值延续
enum Color { red, green = 3, blue }
let flag2: Color = Color.blue
console.log(flag2, 'this is flag2')



// 联合赋值  这样可以保证数据即使是undefined也能正常输出  另外也可以是null

let num: number | undefined | null

// 01-赋值
// num =2
// console.log(num,'赋值了')

// 02-没赋值
console.log(num, '没赋值')




//void类型
function run() {
    console.log('run')
}

// 但使用void类型  可以约定她的返回值  比如 void：返回值可以为空   number-返回值为number
function run1():void{
    console.log('run1')
}

run()

run1()



  
// never类型  是其他类型(包括了null 和undefined)的子类型  代表从不会出现的值
// 这也意味着声明never的变量只能被never类型所赋值




