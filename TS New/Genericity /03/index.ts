// type Person = {
//     name:string
//     age:number
// }

// const me:Person = {
//     name:'yukiice',
//     age:66
// }

// console.log(me)

// type Tpi<T> = keyof T

// interface Persona{
//     name:string,
//     age:number
// }

// const myKey:Tpi<Person> = 'age'

function Person<T,U>(name:T,age:U):T{
    return name
}

console.log(Person<string,number>('yukiice',20))

interface Inter<T>{
    (name:T):T
}

class Classs<T>{
    public name:T | undefined
    add(name:T){
        console.log(name)
    }
}
let cla = new Classs()

cla.add('yukiice1')
