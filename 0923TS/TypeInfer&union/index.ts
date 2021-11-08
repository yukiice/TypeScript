namespace TypeInferUnion {
    let tabarr = [1, '2']
    // tabarr 只能接受 string number 不能接受其他
    tabarr = [2]
    tabarr = ['6']

    // tabarr = [false]    false 理由如上

    interface InfoType {
        name: string
    }

    let info: InfoType
    const info1 = { name: 'yukiice' }
    const info2 = { name: 2 }
    const info3 = { age: 20 }
    const info4 = { name: 'yukiice', age: 20 }

    // info = info1  true
    // info = info2  false
    // info = info3  false
    // info = info4  true


    //    可选参数和剩余参数
    const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
        return callback(...arr)
    }

    const res1 = getSum([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => a + b))
    console.log(res1, 'res1')

    //这里剩余参数 可以只指定第一个即可
    const res2 = getSum([1, 2, 3], (arg1: number, arg2, arg3): number => arg1 + arg2 + arg3)
    console.log(res2, 'res2')


    //    函数双向协变  函数的参数和返回值都要求协变
    let funcA = (arg1: string | number): void => {
    }
    let funcB = (arg1: string): void => {
    }
    let funcC = (arg1: number): void => {
    }
    let funcD = (arg1: number | string): void => {
    }
    // funcA = funcB false
    // funcB = funcA true
    // funcA = funcC false
    // funcB = funcC false
    // funcA = funcD true
    // funcC = funcD true

    let a = (): string | number => 0
    let b = (): string | number => 'yukiice'
    let c = (): string => 'yukiice'
    let d = (): number => 0
    let e = (): boolean => false

    // a = b true
    // a = c true
    // a = d true
    // a = e false

    // b = c true
    // b = d true
    // b = e false

    // c = d false
    // c = e false

    // d = e false

    // 函数重载

    // 类的兼容
    class Animal {
        public static age: number
        constructor(public name: string) {

        }
    }

    class People {
        public static age: string
        constructor(public name: string) {

        }
    }

    class Food {
        constructor(public name: number) {

        }
    }

    let animal: Animal | undefined
    let people: People | undefined
    let food: Food | undefined
    animal = people
    animal = food
    people = food

    class ParentClass{
        private age:number | undefined
        constructor(){

        }
    }
    class ChildClass extends ParentClass {
        constructor(){
            super()
        }
    }
    class OtherClass {
        private age:number | undefined
        constructor(){

        }
    }

    const children:ChildClass = new ChildClass()
    const other:ParentClass = new OtherClass()


    interface Date<T>{
        date:T
    }

    let data1:Date<number> | undefined
    let data2:Date<string> | undefined
    data1 = data2
    
}





