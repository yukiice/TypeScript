console.log('hello')

class Point {
    x:any
    y:any
    constructor(x:any,y:any){
        this.x = x 
        this.y = y
    }
    getPosition(){
        return `${this.x},${this.y}`
    }
}

const p1 = new Point(1,2)
console.log(p1);


var setinfo = {
    _age:18,
    set age(newValue: number){
        if (newValue>18) {
            console.log('to much');
        }else{
            console.log('to less');
        }
    },
    get age(){
        console.log('what are you doing');
        return this._age
    }
}

console.log(setinfo.age);

setinfo.age = 17
setinfo.age = 19


class getNames {
    x:number
    constructor(x:number){
        this.x = x
    }
    static getClassName(){
        return getNames.name
    }
}


const getnames =new getNames(2)

console.log(getnames.x);
console.log(getNames.getClassName());



// es6中类的继承
class es6class{
    name:string
    constructor(name:string) {
        this.name = name
    }
    getName(){
        return this.name
    }
}


class  es6Extends extends  es6class {
    age:number
    constructor(name:string,age:number) {
        super(name)
        this.age  = age
    }
}

const newEx  = new  es6Extends('yukiice',20)
console.log(newEx)
console.log(newEx.getName())
console.log(newEx instanceof es6Extends)
console.log(newEx instanceof es6class)

console.log(Object.getPrototypeOf(es6Extends) === es6class)


// super关键字
// 在普通对象中 他指向父类的原型对象
// 在static修饰的静态方法中，他指向父类


// 下面的例子 super指向父类的原型对象  而不是父类本身
class superF {
    name:string
    constructor() {
        this.name = 'type'
    }
    getName(){
        return this.name
    }
    static  getType(){
        return 'halo types'
    }
}

class  superC  extends  superF {
    constructor() {
        // @ts-ignore
        super()
        console.log('constructor',super.getName())
    }
    getPName(){
        console.log(super.getName(),'pname')
    }
}

const c= new  superC()

c.getPName()
console.log(superC.getType())


// __proto__ 和 prototype

// 子类的prototype指向了父类本身
// 子类的prototype属性的__proto__ 指向父类的 prototype 属性
// 实例的 __proto__属性的__proto__ 指向父类实例的 __proto__

const objs = {}
// @ts-ignore
console.log(objs.__proto__ === Object.prototype)


class  newA extends  Array {
    constructor(...args:any) {
        super(...args);
    }
}

const newa  = new newA(3)

newa.fill('+')
console.log(newa)
console.log(newa.join('_'))







