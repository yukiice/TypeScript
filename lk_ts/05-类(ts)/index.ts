// 001----- ts中定义类的方法
class Person {
    name: string  //属性  前面省略了public关键词
    constructor(n: string) {  //构造函数 实例化类的时候出发的方法
        this.name = n
    }
    run(): void {
        console.log(this.name)
    }
}

let p = new Person('花花')
p.run()


class Person1 {
    name: string  //属性  前面省略了public关键词
    constructor(name: string) {  //构造函数 实例化类的时候出发的方法
        this.name = name
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
}

let p1 = new Person1('花花1')
console.log(p1.getName())


// 002 ---- ts中实现继承 主要依靠 extends / super 这两个关键字
class Person2 {
    name: string
    constructor(name: string) {
        this.name = name
    }
    run(): string {
        return `${this.name}在运动`
    }
}

let p2 = new Person2('花花2')
console.log(p2.run())


class web1 extends Person2 {
    constructor(name: string) {
        super(name)  //  初始化父类的构造函数
    }
    work() {
        console.log(`${this.name}在work`)
    }

}
let p3 = new web1('花花3')

console.log(p3.name)
// 这里就实现了对之前的类的继承
console.log(p3.run(), 'run')
console.log(p3.work(), 'work')


//  03 ------- 类里面的修饰符号  typescript里面定义属性的时候给我们提供了三种修饰符
// {
//     public      公有      在类里面 子类 类外面都可以访问
//     protected   保护类型  在类里面 还有子类里面可以访问  但是在类外面不可以访问
//     provite     私有类型  只可以在类里面可以访问
// }


class Person3 {
    public name: string
    constructor(name: string) {
        this.name = name
    }

    run() {
        console.log(`${this.name}属于run`)
    }
    static print() {  //这是静态方法
        console.log('这是静态方法')
    }
    static sex = '男'
}

Person3.print()
console.log(Person3.sex)



// 多态
// 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类都有不同的表现
class Person4 {
    public name: string
    constructor(name: string) {
        this.name = name
    }
    p4() {
        return '${this.name}来自p4'
    }
    static sex = '女'
}


class Dog extends Person4 {
    constructor(name: string) {
        super(name)
    }
    pdog() {
        return super.p4() + '这是pdog重新调用后加上的'  //这里相当于调用super方法 来调用父类的p4方法  进行重写  （这里主要是如果父类的方法被改写，这里可以进行重新的调用）
    }
}

const dog = new Dog('小花')
console.log(dog.pdog())



//抽象类
// 抽象类是提供其他类继承的基类，他本身不能直接被实例化，只能在被继承的类中去实现

// 首先需要对类进行抽象
abstract class Person5 {
    public name:string
    p5(){
        return '${this.name}'
    }
    // 设定一个抽象方法  要求返回值是一个string
    // 那么如果继承的话  子类中也就必须有一个方法为getp5
    abstract getp5():string
    
}
// 这里继承
// 但里面必须得有继承的类中的抽象方法  不然会报错
class p5Dog extends Person5{
    getp5(){
        return 'aaa'
    }
}


