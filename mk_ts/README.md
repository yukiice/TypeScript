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

