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