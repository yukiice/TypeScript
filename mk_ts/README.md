# 接口
```
interface Person {
    name: string,
    age?: Number,  //这里定义为了 ?为可选     readonly为只读,后续不可以修改
    [propName: string]: any,     //这里的意思是属性需要是一个string  但值是any
    say(): string
}

const getPersonName = (person: Person): void => {
    console.log(person.name)
}

const setPersonName = (person: Person, name: string): void => {
    person.name = name
    // person.age = 18
}

const person = {
    name: 'dell',
    age: 20,
    say() {
        return 'aaa'
    },
    teacher(){
        return '886'
    }
}


getPersonName({
    name: 'yukiice',
    sex: 'male',   //这样多出来一个新属性sex  也是OK的
    say() {
        return 'aaa'
    }
})

setPersonName(person, 'yukiice')


// 这表示一个类应用了一个接口
class User implements Person {
    name='hello'
    say(){
        return 'welcome'
    }
}

// 接口的继承
interface Teacher extends Person {
    teacher():string
}

// 接口还可以直接定义一个方法
interface sayHi{
    (word:string):string
}

const setTeacherName = (person:Teacher):void =>{
   
}
setTeacherName(person)

const say:sayHi = (word:string)=>{
    return word
}

```

# 类
```
class Person {
    name = 'yukiice'
    getName() {
        return this.name
    }
}
// 类的继承
class Teacher extends Person {
    getTeacher() {
        return 'hello'
    }
    getName() {  
        return super.getName() + '???'   //这里相当于调用super方法 来调用父类的getName  进行重写  （这里主要是如果父类的方法被改写，这里可以进行重新的调用）
        return 'hhh'  //这里子类的getName  会覆盖掉父类的getName
    }
    
}

const teacher = new Teacher()
console.log(teacher.getName())
console.log(teacher.getTeacher())
```

# 访问类型和构造器

```
// public     允许在类的内外被调用
// private    允许在类内被调用
// protected  允许在类内以及继承的子类中使用

class Person {
    constructor(public name:string){}
}

class Teacher extends Person {
    constructor (public age:number){
        super('yukiice')
    }
}

const teacher = new Teacher(20)
```
# setter、getter、类的挂载
```
class Person {
    constructor(private _name:string) { }
    get name() {
        return this._name + ' hello'
    }
    set name(name:string) {
        const realName = name.split(' ')[0]
        this._name = realName
    }
}
// 这里可以通过name 来获取到值
const person = new Person('yukiice')
// 这里存进去的是this.name  但这里得到的却是 加上了hello  相当于做了加密
console.log(person.name)
person.name = 'yukiice hello'
console.log(person.name)


class Demo {
// 因此可以通过private  来限制实例的创建
private constructor(){}

}
// 但这样就可以频繁的创建实例
const demo1 = new Demo()
const demo2 =  new Demo()

class Demo {
    private constructor() { }
    static getInstance() {
    }
}
const demo1 = Demo.getInstance


class Demo{
    // 这一步相当于在Demo上创建了一个私有属性  名为instance
    private static instance:Demo
    // 声明类
    private constructor(public name:string){}
    // 挂载在类上
    static getInstance(){
        // 做判断
        // 如果这个属性不存在的话  那么就创建一个新的实例  相当于做一次存储
        if (!this.instance) {
            this.instance = new Demo('yukiice')
        }
        return this.instance
    }
}
// 这里首先会调用一次Demo1  但Demo.getInstance是一个undefined,因此会触发if判断的第一层  进行创建
const Demo1 = Demo.getInstance()
// 这里相当于一次调用，并不会重新创建  因此demo1和demo2是相同的
const Demo2 = Demo.getInstance()

```
# 抽象类
```
// 这里首先对action进行抽象
abstract class Action {
    // 设置width 值为number
    width:number
    // gettype  返回值为固定值 hello
    getType(){
        return 'hello'
    }
    // 设定一个抽象类 要求返回值是一个number
    abstract getArea():number
}

// 这里继承
// 但里面必须得有抽象类  不然会报错
class Demo extends Action {
    getArea(){
        return 2
    }
}
```


# 接口的继承2
```
// 接口的作用 主要如果里面有相似的属性  可以通过继承的方式来进行
// 比如下面   这样就不用重复的去些name  而且把他抽离出来，用继承的方式，来完成填充属性
interface Person {
    name:string
}
interface Teacher extends Person{
    teacherAge:number
}
interface Student extends Person{
    age:number
}
const teacher = {
    name:'lee',
    teacherAge:20
}
const student = {
    name:'yukiice',
    age:18
}
const getUserInfo = (user:Person) =>{
    console.log(user.name)
}
// 这里分别输出 lee   yukiice
getUserInfo(teacher)
getUserInfo(student)

```
# 联合类型
```
// 联合类型
interface Brid {
    fly: boolean
    sing: () => {}
}

interface Dog {
    fly: boolean
    bark: () => {}
}
// 用断言的方式
function Demo(animal: Brid | Dog) {
    if (animal.fly) {
        (animal as Brid).sing()
    }
    (animal as Dog).bark()
}

// 用in来做类型保护
function DemoSecond(animal: Brid | Dog) {
    if ('sing' in animal) {
        animal.sing()
    } else {
        animal.bark()
    }
}
// 用typeof来做语法保护
function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
    return first + second
}

// 用instanceof来做语法保护
class NumberObj {
    count:number
}

function addSecond(first: object | NumberObj, second: object | NumberObj){
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}

```
# 枚举
```
enum Status{
    noSend,
    send,
    back
}
// 枚举类型  默认是从0开始的
console.log(Status.noSend) //0


enum Status1{
    noSend=1,
    send,  //send=3
    back
}
// 如果指定中间的值 那么第一个值还是0  而从指定的值开始 后面的会依次递增   如果指定第一个值 那么会从第一个值开始递增
console.log(Status1.noSend)  //1
console.log(Status1.send)  //2
```
# 泛型
## 函数泛型
```
// 泛型 generic  泛指的类型
// 方便对其中的参数进行类型的限制
// 与此同时，如果你没有对泛型进行调用时的指定，那么TS也会推断你用了什么泛型所指定的类型
function Demo<types>(first:types,second:types){
    return `${first}${second}`
}
Demo<string>('2','2')

function Demo1<types1>(params:types1[]){   //types1[]  也可以写为 Array<types1>
    return params
}
Demo1<string>(['2'])

// 还可以传多个
function Demo2<T,P>(nano:T,pod:P){
    return `${nano}${pod}`
}
Demo2<string,number>('1',2)

```
## 类的泛型
```
interface Item {
    name: string
}

class Demo<T extends Item>{
    constructor(private data: T[]) { }
    getItem(index: number): string {  //这里string不能写为T  因为item里面要求的是name为string类型  结果返回的却是t类型 所以报错
        return this.data[index].name
    }
}

const data = new Demo([
    {
        name: 'yukiice'
    }
])

// 这样泛型就指定了  P必须是一个string或者是一个number
class Demo1<P extends string | number>{
    constructor(private data: P[]) { }
    getData(index: number): P {
        return this.data[index]
    }
}
interface Test {
    name: string
}
const Data = new Demo1<string>([])
const func: <T> (params: T) => string = <T>(params: T) => {
    return '123'
}
```

