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

- 定义接口数组

  - ```
    interface Cocoa{
      name:string,
      age?:number,
    }
    
    //然后通过继承的方法
    interface Cocoas extends Array<Cocoa>{}
    
    //最后引用这个接口即可
    public cocoa:Cocoas = [
        {
          name:'yukiice',
          age:15
        }
      ]
    
    ```

  - 

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
  

------

- 可索引的接口（用来做对数组和对象的约束） （并不常用）
- 首先是对数组的约束  规定了数组中的类型

- ```
  interface UserArr {
      [index:number]:string
  }
  
  const  arr:UserArr = ['aaa','bbb']
  console.log(arr[1])
  ```

- 然后是对于对象的约束

- ```
  interface UserObj {
      [index:string]:string
  }
  const obj:UserObj = {name:'hello,this is a obj'}
  
  console.log(obj.name)
  ```

------

- 类类型接口，使用的比较多

- 对类进行了约束 与抽象类有些相似

- ```
  interface Akg {
      name: string,
      go(str: string): void
  }
  
  class Bose implements Akg {
      name: string;
      constructor(name: string) {
          this.name = name
      }
      go() {
          console.log(this.name + '？？？')
      }
  
  }
  
  const bose = new Bose('yukiice')
  
  console.log(bose.name)
  bose.go()
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
    // private    允许在类内被调用，但继承的子类以及类外不能
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

#### 类的静态方法

- 类的静态方法在类内创建，可以创建方法或者属性，在类外调用

- ```
  class Person3 {
      public name:string
      constructor(name:string){
          this.name = name
      }
  
      run(){
          console.log(`${this.name}属于run`)
      }
      static print(){  //这是静态方法
          console.log('这是静态方法')
      }
      static sex = '男'  //这是静态属性
  }
  
  //这样在外面 就可以直接调用static声明的两个静态属性和方法
  
  Person3.print()
  console.log(Person3.sex)
  ```

#### 类的多态

- 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类都有不同的表现

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
                this.instance = new Demo('yuki ice')
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


#### 联合类型

- 联合类型表示取值可以为多种类型中的一种

------

- 联合类型有多种方式处理

- 1、// 用断言的方式

  - ```
    interface Brid {
        fly: boolean
        sing: () => {}
    }
    interface Dog {
        fly: boolean
        bark: () => {}
    }
    function Demo(animal: Brid | Dog) {
        if (animal.fly) {
            (animal as Brid).sing()
        }
        (animal as Dog).bark()
    }
    
    ```

- 2、用in来做类型保护

  - ```
    function DemoSecond(animal: Brid | Dog) {
        if ('sing' in animal) {
            animal.sing()
        } else {
            animal.bark()
        }
    }
    ```

- 3、用typeof来做语法保护

  - ```
    function add(first: string | number, second: string | number) {
        if (typeof first === 'string' || typeof second === 'string') {
            return `${first}${second}`
        }
        return first + second
    }
    ```

- 4、用instanceof来做语法保护

  - ```
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

#### 枚举

- 枚举的业务主要在固定的几个值

- 他默认的第一个值是0，后面依次开始递增

  - ```
    enum Status{
        noSend,
        send,
        back
    }
    console.log(Status.noSend)  //0
    ```

-  如果指定中间的值 那么第一个值还是0 而从指定的值开始 后面的会依次递增  如果指定第一个值 那么会从第一个值开始递增

  - ```
    enum Status1{
        noSend=1,
        send,  //send=3
        back
    }
    console.log(Status1.noSend)  //1
    console.log(Status1.send)  //2
    ```

#### 泛型

 *泛型 generic 泛指的类型*

##### 1、函数泛型

- 方便对其中的参数进行类型的限制

- 与此同时，如果你没有对泛型进行调用时的指定，那么TS也会推断你用了什么泛型所指定的类型

  - ```
    function Demo<types>(first:types,second:types){
        return `${first}${second}`
    }
    Demo<string>('2','2')
    ```

  - ```
    function Demo1<types1>(params:types1[]){   //types1[]  也可以写为 Array<types1>
        return params
    }
    Demo1<string>(['2']) 
    ```

- 可以对其中的数组进行推断或者限制

  - ```
    function  demos<T>(a:Array<T>):Array<T>{
        return a 
    }
    const app = demos<number>([2])
    console.log(app);
    ```

- 还可以传多个

  - ```
    function Demo2<T,P>(nano:T,pod:P){
        return `${nano}${pod}`
    }
    Demo2<string,number>('1',2)
    ```

##### 2、类的泛型

- 类的泛型，相比函数的泛型，更为抽象一些

  - ```
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
    ```

- 而且也可以指定泛型的类型

  - ```
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
  
- 泛型接口

  - ```
    // 泛型接口
    interface Coco<T>{
        (value:T):T
    }
    
    function getCoco<T>(value:T):T{
        return value
    }
    
    const myCoco:Coco<string> = getCoco
    
    myCoco('20')   //里面应该是string  
    ```


#### 命名空间

- 命名空间一个最明确的目的就是解决重名问题

- 他可以有效的帮助我们定义标识符的可见范围，一个标识符可以在多个命名空间中进行定义，他在不同命名空间中的含义是不相干的

- 这样，你在一个新的命名空间中可以定义任何标识符，他们不会和任何已有的标识符产生重复和冲突，因为已有的都存在与其他命名空间中

  - ```
    class Header {
        constructor (){
           const  ele = document.createElement('div')
           ele.innerText = 'this is Header'
           document.body.appendChild(ele)
        }
    }
    
    class Content {
        constructor (){
           const  ele = document.createElement('div')
           ele.innerText = 'this is Content'
           document.body.appendChild(ele)
        }
    }
    
    class Footer {
        constructor (){
           const  ele = document.createElement('div')
           ele.innerText = 'this is Footer'
           document.body.appendChild(ele)
        }
    }
    
    class Page{
        constructor (){
            new Header()
            new Content()
            new Footer()
        }
    }
    ```

#### 装饰器

- 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或者参数上面，可以修改类的行为
- 通俗的讲的话，就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
- 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
- 装饰器的写法：普通装饰器（无法传参）  装饰器工厂（可传参）

##### 1、类装饰器

```
function dog(params: any) {
    console.log(params)
    //这里的params就是当前类  
    
    //这里apk就会被赋予到Cocoa上
    params.prototype.apk = 'xxx'
}

@dog
class Cocoa {
    public name: string | undefined
    public age: number | undefined
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getData(){
        
    }
}

let cocoa = new Cocoa()
//这里就会打印出来xxx
console.log(cocoa.apk)
```

##### 2、装饰器工厂

```
function Moka(params: any) {
    return function (target: any) {
        console.log(target)
        console.log(params)
        
        // 这样就可以扩展了
        target.prototype.urls = params
    }
}
//这个  'hello'代表了把hello赋值给了params   把下面的类 赋值给了target
@class('hello')
class Mokasu {
    constructor() {

    }
    getData() {

    }
}

let moka = new Mokasu()

console.log(moka.urls)  //那么打印结果就是hello
```

##### 类装饰器 重载构造函数

-  类装饰器表达的时候，类的构造函数会作为其唯一的参数
- 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明

```
function logs(target:any){
    console.log(target)
    return class extends target{
        apiUrl:any = '我是修改后的数据'
    }
}

@logs
class Seiya{
    public apiUrl:string | undefined
    constructor(){
        this.apiUrl = '初始化的apiurls'
    }
    getData(){
        console.log(this.apiUrl)
    }
}

let seiya = new Seiya()
seiya.getData()
```

##### 属性装饰器

- 属性装饰器表达式在运行的时候当做函数被调用，传入下列两个参数
  - 1.对于静态成员来书是类的构造函数，对于实例成员来说是类的原型对象
  - 2.成员的名字

```
function qino(params:string){
    return function (target:any){
        console.log(this.params)
        console.log(this.target)
    }
}

function qinoLog(params:any){
    return function(target:any,attr:any){
        console.log(target)
        console.log(attr)
        target[attr] = params  //  基本等于 target.prototype.url = params
    }
}
@qino('xxx')
class Qino{
    @qinoLog('http')
    public url:string | undefined
    constructor(){

    }
    getData(){
        console.log(url)
    }
}

let qinos = new Qino()
```

##### 方法装饰器

- 它会被应用到方法上，它会被应用到方法的属性描述符上面，可以用来监视、修改或者替换方法定义
- 方法装饰会在运行的时候传入下列三个参数
  - 1.成员的名字
  - 2.对于静态成员来说是类的构造函数，对于实例是类的原型对象
  - 3.成员的属性描述符

```
function logMethod(params:any){
    return function (target:any,methodName:any,desc:any){
        console.log(target)  //  getdata   constructor: Cat
        console.log(methodName)   // getData
        console.log(desc.value)  //打印出来的就是 getdata(){ console.log)(this.url)}

        target.apiUrl = 'xxx'
        target.run = function(){
            console.log('run')
        }

        
    }
}
class Cat {
public url:any | undefined;
constructor(){

}
@logMethod('http://baidu.com')
getData(){
    console.log(this.url)
}
}

let cat:any  =new Cat()
console.log(cat.apiUrl)
```

######  **修改装饰器的方法**

```
function Logs(params:any){
    return function (target:any,methodName:any,desc:any){
        console.log(target)  //  getdata   constructor: Cat
        console.log(methodName)   // getData
        console.log(desc.value)  //打印出来的就是 getdata(){ console.log)(this.url)}

    // 修改装饰器的方法，把装饰器方法里传入的所有参数改为string类型
    let  add  =desc.value
    desc.value  =function (...args:any[]){
        args = args.map((value)=>{
            return String(value)
        })

        console.log(args)   //  并没有打印出来getdata里面的方法  而是打印出来了  ['111','xxx']

        // 但可以通过一些方法  比如 
        onmsgesturehold.apply(this,args)
    }        
    }
}
class Cats {
public url:any | undefined;
constructor(){

}
@Logs('http://baidu.com')
getData(...args:any[]){
    console.log('我是getdata里面的方法')
    console.log(args)   //通过上面的一系列运算  现在这里就变成了['123','xxx']  完成了对方法装饰器的改变
} 
}

let cats:any  =new Cats()
Cats.getData(123,'xxx')
```

##### 方法参数装饰器

- 参数装饰器表达式会在运行时候当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列三个参数
  - 方法的名字
  - 对于静态成员来说是类的构造函数，对于实力成员是类的原型对象
  - 参数在函数参数列表中的索引

```

function Cocoy(params:any){
    return function (target:any,paramsName:any,paramsIndex:any){
        console.log(params)   //  step1 'uid'
        console.log(target)   //  stpe2  类的原型对象
        console.log(paramsName) // step3  getData  方法的名称
        console.log(paramsIndex) //step4 0  索引

        // 因此 就可以这样操作  
        target.apiUrl =  params  
    }
}


class Cocos{
    public url:string | undefined
    constructor(){

    }
    // 这里调用方法的时候  会同时调用装饰器  这样可以为类的原型增加一些元数据
    getData(@Cocoy('uid') uid:any){
         console.log(uid)     //step5  'xxx'  这个是  uid:any这个值  传入的值
    }
}
let cocos = new Cocos()
cocos.getData('xxx')

console.log(cocos.apiUrl)
```

