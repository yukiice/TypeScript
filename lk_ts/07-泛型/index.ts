// 泛型的目的  就是为了解决类 接口 方法的复用性，以及对不特定数据类型的支持
function Demo<types, type>(name: type, age: types) {
    return console.log(name, age)
}

Demo<number, String>('15', 20)


interface Da {
    name: string
}

class Dd<T extends Da>{
    constructor(public data: T[]) { }
    getData(index: number): string {
        return this.data[index].name
    }
}

const data = new Dd([
    {
        name: 'yukkiice'
    }
])


// 泛型接口
interface Coco<T> {
    (value: T): T
}

function getCoco<T>(value: T): T {
    return value
}

const myCoco: Coco<string> = getCoco

myCoco('20')


class Cocoa<T>{
    add(info: T): boolean {
        console.log(info, '????')
        return true
    }
    update(info: T, id: number): boolean {
        console.log(info)
        console.log(id)
        return true
    }
}

class Moka {
    name: string | undefined;
    age: string | undefined
}

let moka = new Moka()

moka.name = 'moka'
moka.age = '16'

const cocoa = new Cocoa<string>()
cocoa.add('nihao')



class Ccino {
    title: string | undefined
    desc: string | undefined
    status: number | undefined

    constructor(params: {
        title: string | undefined,
        desc: string | undefined,
        status?: number | undefined
    }) {
        this.title = params.title
        this.desc = params.desc
    }
}

let ccino = new Ccino({
    title: '点兔',
    desc: "Cocoa and Ccino"
})

let newCocoa = new Cocoa<Ccino>()

newCocoa.add(ccino)


let newCocoas = new Cocoa<Ccino>()
newCocoas.update(ccino, 2)

// 接口、类、泛型综合使用
interface Db<T> {
    add(info: T): boolean
    update(info: T, id: number): boolean
    delete(id: number): boolean
    get(id: number): any[]
}

class MysqlDb<T> implements Db<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.")
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.")
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.")
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.")
    }


}

class MssqlDb<T> implements Db<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.")
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.")
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.")
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.")
    }

}

class User {
    username: string | undefined
    password: string | undefined
}

var u = new User()

u.username = '花花'
u.password = '123456'


let mysql = new MysqlDb<User>()

mysql.add(u)







