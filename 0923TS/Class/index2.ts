// 这里主要是TS中的类

// public 类内外皆可访问

// private 私有的 只能在类内访问

//protected 受保护的 只能在子类中进行访问


class publicClass {
    public address: string
    protected name: string
    private readonly age: number = 18
    protected constructor(address: string, name: string) {
        this.name = name
        this.address = address
    }

    protected getName() {
        return this.name
    }
    private getAge() {
        return this.age
    }
}

class pubclass extends publicClass {
    constructor(name: string, address: string) {
        super('UK', '20');
    }
}

const newPubclass = new pubclass('18', 'china')
console.log(newPubclass);


class sgClass {
    public name?: string
    public age?: number
    private _infoStr?: string
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name
        this.age = age
    }
    get infoStr() {
        return `${this.name}:${this.age}`
    }
    set infoStr(value) {
        console.log(`setter:${value}`);
        this._infoStr = value
    }
}

const info4 = new sgClass('yukiice', 20, '男')

info4.infoStr = '花花:28'

console.log(info4.infoStr);



// 抽象类
// 抽象类无法直接创建实例  必须实现继承

abstract class People {
    constructor(public name: string) {

    }
    public abstract printName(): void
}

class Man extends People {
    constructor(name: string) {
        super(name)
        this.name = name
    }
    public printName() {
        return this.name
    }
}

const man = new Man('yukiice')

console.log(man.name);
console.log(man.printName());


// 接口和类的相互继承

interface inA {
    type: string
}
class FoodClass implements inA {
    public type!: string
}

class A {
    protected name!: string
}
interface I extends A {

}

class B extends A implements I {
    protected name!: string
}


// 泛型和类的结合

const infos = <T>(c: new () => T): T => {
    return new c()
}

class newInfos {
    public age: number
    constructor(){
        this.age = 18
    }
}
infos<newInfos>(newInfos)
console.log(infos<newInfos>(newInfos).age);

