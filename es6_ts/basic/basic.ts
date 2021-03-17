function getSome(some:string |number):number {
    return 1
}
// 联合类型  会定义为公共属性  比如上面  就会返回 number --- 因为它是公共属性


interface p1{
    readonly name:string,
    age?:number,
    [propName:string]: string | number
}
// 接口这里  如果定义任意属性，  那么就必须是他们的子集，
//   如果 只定义为string的话  那么 age 就为number  number不是string类型的子集，因为需要对其进行更改，如上设置


const p:p1 ={
    name:'yukiice',
    age:1,
}

// p.name = 'hhh'


interface p2{
    [index:number]:number
}

let p0:p2 =  [2,3,4,65,6,6,6,5,5]


interface args {
    [index:number]:number,
    length:number,
    callee:Function
}

function sum (){
    let  arg:args = arguments
    console.log(arg)
}

sum()


function choose(name1:string,name2:string='maomi'):string{
    return name1 + name2
}

let choose1 = choose('hello')
console.log(choose1)




// 这个叫做函数的重载
// 上面的两个function都是函数的定义。最后一次为函数的实现
function reverse(x:number):number
function reverse(x:string):string
function reverse(x:number | string): number |string{
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    }else if (typeof x  === 'string'){
        return x.split('').reverse().join('')
    }
}

let aaa = reverse('123')
let bbb = reverse(12355)

console.log(aaa,typeof aaa,bbb,typeof bbb);




// function getCache(key:string) :any{
//     return (window as any).cache[key]
// }

// interface Cat {
//     name:string;
//     run():void
// }
// const tom = getCache('tom') as Cat
// tom.run()



class Animal {
    public name;
    constructor(name){
     this.name = name
    }
    sayHi(){
        return `this name is ${this.name}`
    }
}
let a = new Animal('qqq')

console.log(a.sayHi())

class Cat extends Animal {
    constructor(name){
        super(name)
        console.log(this.name)
    }
    sayHi(){
        return `aaa` +super.sayHi()
    }
}

let c = new Cat('qqq')

console.log(c.sayHi())



console.log('--------------------')

// getter setter 

class Animals {
    public name
    constructor(name){
        this.name = name 
    }
    get(){
        return 'jack'
    }
    set(value){
        console.log('setter' + value)
    }
}

let as  = new Animal('kittey')

as.name =  'Tom'
console.log(as.name)





class Cats{
    name = 'jack'
    static num = 42
    constructor(){

    }
}

let cat  =new Cats()
console.log(cat.name,Cats.num)

abstract class Catss{
public name
public constructor(name){
    this.name  = name
}
public abstract sayHi()
}

// 抽象类是不允许被实例化的
// let a = new Catss('jack')    

// 抽象类中的抽象方法  必须被子类实现
class Catd extends Catss {
    public sayHi(){
        console.log(`${this.name}`)
    }
} 

let catd =  new Catd('花花')
console.log(catd.name)