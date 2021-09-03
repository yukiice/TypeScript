/*
 * @Author: your name
 * @Date: 2021-08-01 01:34:02
 * @LastEditTime: 2021-08-14 00:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/app/class.ts
 */
// 抽象类
abstract class Animal{
    abstract makeSound():void
    move():void{
        console.log('move')
    }
}

class Dog extends Animal {
    #region:string
    constructor(){
        super()
        this.#region = '测试私有'
    }
    private uname = 'yukiice'
    makeSound(){
        console.log('hello')
        console.log(this.#region)
    }
}
const dog = new Dog()
dog.makeSound()
dog.move()
console.log((dog as any).uname)
console.log((dog as any).region)

console.clear()
// new test

// let info ={
//     _age:18,
//     set age(value:number){
//         if (value > 18) {
//             console.log('why so far')
//         }else{
//             console.log('i am young')
//         }
//     },
//     get age(){
//         console.log('what do you do')
//         return this._age
//     }
// }
// console.log(info._age)

// info.age = 17
// info.age = 19

class info {
    _age
    constructor(age:number){
        this._age = age
    }
    set age(val){
        console.log(val)
        this._age = this.age
    }
    get age(){
        return this._age
    }
}
const infos = new info(50)
console.log(infos.age,infos._age)


class Parent {
    constructor(){
        console.log(new.target,'这是target')
    }
}

class Child extends Parent{
    constructor(){
        super()
    }
}

const c = new Child()


class A {
    constructor(name:string){
        console.log(name,'this is name')
    }
}
const aa = new A('lison') 


class Pa{
    public static age:number  = 18
    constructor(){

    }
    public static getAge(){
        return Pa.age
    }
}


const pa = new Pa()
console.log(Pa.getAge())


// get和set
class Info {
    public name:string
    constructor(name:string){
        this.name = name
    }
    get infoStr(){
        return this.name
    }
    set(value:string){
        console.log(value)
    }
}


const inf = new Info('halo')

console.log(inf.infoStr)


// 抽象类
abstract class  cx{
    constructor() {
        
    }
    abstract cat():void
}


class cxchild extends cx{
    public name:string
    constructor(name:string){
        super()
        this.name = name
    }
    cat(){
        return this.name
    }
}

const cxx = new cxchild('halos')
console.log(cxx.cat())

class Ja{
    protected name:string | undefined
    constructor(){

    }
}
interface I extends Ja{}

class Ba extends Ja implements I{
    public name:string | undefined
}