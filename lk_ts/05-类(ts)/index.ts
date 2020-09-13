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
    getName():string{
        return this.name
    }
    setName(name:string):void{
        this.name = name
    }
}

let p1 = new Person1('花花1')
console.log(p1.getName())


// 002 ---- ts中实现继承 主要依靠 extends / super 这两个关键字
class Person2{
    name:string
    constructor(name:string){
        this.name = name
    }
    run():string{
        return `${this.name}在运动`
    }
}

let p2 = new Person2('花花2')
console.log(p2.run())


class web1 extends Person2 {
    constructor(name:string) {
        super(name)  //  初始化父类的构造函数
    }
    work(){
        console.log(`${this.name}在work`)
    }
    
}
let p3 = new web1('花花3')

console.log(p3.name)
// 这里就实现了对之前的类的继承
console.log(p3.run(),'run')
console.log(p3.work(),'work')


//  03 ------- 类里面的修饰符号  typescript里面定义属性的时候给我们提供了三种修饰符
// {
//     public      公有      在类里面 子类 类外面都可以访问
//     protected   保护类型  在类里面 还有子类里面可以访问  但是在类外面不可以访问
//     provite     私有类型  只可以在类里面可以访问
// }




