# TypeScript复习笔记



## 01、数据类型

#### 1、基础类型

- string
- boolean
- number
- void
- undefined
- symbol
- null

#### 2、对象类型

- {}
- Class
- function
- []

#### 3、元祖

------

- 元组中允许存储不同类型的元素，元组可以作为参数传递给函数

- ```
  const teacherList: ([string, string, number])[] = [
      ['hello', 'hello1', 20]
  ]
  ```

- 元祖也允许通过索引值的方式对其进行访问

  - ```
    var mytuple = [10,"Runoob"]; // 创建元组
    console.log(mytuple[0]) 
    console.log(mytuple[1])
    ```

- 同时也可以对元祖中的数值进行结构、计算、更新

  - ```
    //更新
    mytuple[0] = 121  
    //添加元素
    mytuple.push(12) 
    //删除最后一个
    mytuple.pop()
    //解构
    let [b,c] = mytuple   //下面可以分别输出mytuple中的两个值
    ```

#### 4、接口

------

**接口首先可以进行定义，同时也可以可以被继承、应用**

- 首先是正常使用

  - ```
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
    ```

- 其次可以被应用

  - ```
    // 这表示一个类应用了一个接口
    class User implements Person {
        name='hello'
        say(){
            return 'welcome'
        }
    }
    ```

- 然后依然可以被继承

  - ```
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
    
  
- 还可以这样继承

- 接口的作用 主要如果里面有相似的属性 可以通过继承的方式来进行

- 比如下面  这样就不用重复的去些name 而且把他抽离出来，用继承的方式，来完成填充属性

  - ```
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

#### 5、类

------

- 类也是需要进行定义，同时可以进行继承，更新

- 定义

  - ```
    class Person {
        name = 'yukiice'
        getName() {
            return this.name
        }
    }
    ```

- 继承，更新和同时调用父类

  - ```
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
    ```

  - 这样下面就可以进行调用

  - ```
    const teacher = new Teacher()
    console.log(teacher.getName())
    console.log(teacher.getTeacher())
    ```
  
- 类的访问类型

  - ```
    // public     允许在类的内外被调用
    // private    允许在类内被调用
    // protected  允许在类内以及继承的子类中使用
    
    class Person {
        constructor(public name:string){}
    }
    ```

#### 构造器

- 构造器就是对类的类型实例化

- 当你创一个类的时候，实际你已经创建了多个构造器

  - ```
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

#### setter和gettter

- setter和getter都可以对属性进行保护

- 可以应用于外部呈现的改变，而内部的值属性并未改变的例子，例如下面的代码呈现

  - ```
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
    ```

#### 类的挂载

- 虽然可以通过class创建类，通过可以通过new的方法不断创建new实例，例如下面的代码

  - ```
    class Demo {
    }
    const demo1 = new Demo()
    const demo2 =  new Demo()
    ```

- 但如果想要进行限制，那么可以通过private限制实例的引用和创建

  - ```
    // 因此可以通过private  来限制实例的创建
    private constructor(){}
    //这样实例的创建就收到了限制
    ```

- 但这样外面也无法创建实例了，但是可以通过static方法，static方法并不是挂载在类的实例方法上，而是直接挂载在类的上面，因此可以通过这个方法，来创建新的实例

  - ```
    class Demo {
        private constructor() { }
        static getInstance() {
        }
    }
    const demo1 = Demo.getInstance
    ```

  - ```
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

#### 抽象类

- 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。

- abstract抽象方法只能放在抽象类里面

- 抽象类和抽象方法用来定义标准 。 标准：Animal 这个类要求它的子类必须包含eat方法

  - ```
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

  



