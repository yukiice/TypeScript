enum Cats{
    Green=202,
    Yellow=202,
    Black,
    Red
}

let color = Cats[53]

console.log(color)


// 类型断言

interface Foo {
    name:string
    age:number
}

const foo = {} as Foo

foo.name = 'yukiice'

foo.age = 18

console.log(foo)


// 为了得到更好的代码提示
const foo1 = <Foo>{
    name:'yukiice1',
    age:15
}

console.log(foo1)



type ErrorCodes = "GET" | "POST" | "DELETE" | "PATCH" | "OPTIONS"| "PUT"

function moveTo<T>(distance:T,direction:ErrorCodes){

}

moveTo<number>(1,"GET")