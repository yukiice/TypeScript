namespace AdvancedType02 {

    // 链式调用方法
    class Parent {
        constructor(public count: number = 10) {
        }

        public add(value: number) {
            this.count += value
            return this
        }

        public reduce(value: number) {
            this.count -= value
            return this
        }
    }

    let parent = new Parent()
    console.log(parent.add(3).reduce(5).add(2));

    class Child extends Parent {
        constructor(public count: number = 0) {
            super(count)
        }

        public pow(value: number) {
            this.count = this.count ** value
            return this
        }
    }

    let child = new Child()
    console.log(child.add(5).pow(2))

}

namespace Type2 {
    function getValue<T, K extends keyof T>(obj: T, names: K[]): Array<T[K]> {
        return names.map((n) => obj[n])
    }

    const infoObj = {
        name: 'yukiice',
        age: 18
    }
    let infoValue = getValue(infoObj, ['name', 'age'])
    console.log(infoValue)
}


//索引访问操作符号
namespace Type3 {
    interface InfoType {
        name: string,
        age: number
    }

    type NameTypes = InfoType['name']
    let qs: { name: string } = {
        name: 'yukiice'
    }
    console.log(qs)

    function getProperty<T, K extends keyof T>(obj: T, name: K): T[K] {
        return obj[name]
    }

    interface Objs<T> {
        [key: string]: T
    }

    const Obj1: Objs<number> = {
        age: 15
    }
    console.log(Obj1)
    const keys: Objs<number>['name'] = 15
    console.log(keys)
}


namespace Type3 {
    interface Type {
        a: never,
        b: never,
        c: string,
        d: number
    }

    type Test = Type[keyof Type]
    let q: Test = '2'
    q = 2
}

// 类型映射和修饰
// Readonly 只读的   Partial 可选的   这两个都为高级类型修饰

namespace Type4 {
    interface Type {
        name: string,
        age: number,
        sex: string
    }

    type NowType<T> = {
        readonly [P in keyof T]: T[P]
    }
    type  NewType = NowType<Type>
    let info: NewType = {
        name: 'yukiice',
        age: 18,
        sex: 'man'
    }
}


// Pick Record    Pick高级类型 使用方法如1所示   Record如2所示

namespace Type5 {
    interface Type {
        name: string,
        age: number,
        sex: string
    }

    type Picks<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    type newType = Picks<Type, 'name'>
    let q: newType = {
        name: 'hello'
    }

    const Info: Type = {
        name: 'yukiice',
        age: 18,
        sex: 'man'
    }

    function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
        const res: any = {}
        keys.map(item => {
            res[item] = obj[item]
        })
        return res
    }

    const nowPick = pick(Info, ['name'])
    console.log(nowPick)
}


// Records的实现
namespace Type6 {
    type Recordss<K extends keyof any, T> = {
        [P in K]: T
    }

    interface Type {
        name: string,
        age: number
    }

    type name = 'huahua' | 'xiaoming' | 'xiaohong'

    type newType = Recordss<name, Type>
    const news: newType = {
        huahua: {
            name: 'huahua',
            age: 15
        },
        xiaoming: {
            name: 'huahua',
            age: 15
        },
        xiaohong: {
            name: 'huahua',
            age: 15
        },
    }

}

//

namespace Type7 {
    type Proxy<T> = {
        get(): T
        set(value: T): void
    }
    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }

    function proxify<T>(obj: T): Proxify<T> {
        const res = {} as Proxify<T>
        for (const key in obj) {
            res[key] = {
                get: () => obj[key],
                set: (value) => obj[key] = value
            }
        }
        return res
    }

    let props = {
        name: 'yukiice',
        age: 18
    }
    let proxys = proxify(props)
    console.log(proxys)
    console.log(proxys.name.get())
    console.log(proxys.name.set('huahua'))


}


namespace Type8 {
    const stringIndex = 'a'
    const numberIndex = 1
    const symbolIndex = Symbol()
    type Obj = {
        [stringIndex]: string,
        [numberIndex]: number,
        [symbolIndex]: symbol
    }
    type KeysType = keyof Obj

    type ReadOnlyType<T> = {
        readonly [P in keyof T]: T[P]
    }
    let obj: ReadOnlyType<Obj> = {
        a: 'aa',
        1: 11,
        [symbolIndex]: Symbol()
    }
    console.log(obj)
}

namespace Type8 {
    type PromiseType<T> = {
        [P in keyof T]: Promise<T[P]>
    }
    type Truple = [boolean, string, number]
    type newType = PromiseType<Truple>
    let tuple1: newType = [
        new Promise<boolean>(resolve => resolve(false)),
        new Promise<string>(resolve => resolve('1')),
        new Promise<number>(resolve => resolve(2))
    ]
    console.log(tuple1)
}


namespace Type9 {
    // unknown
// 任何类型都可以赋值给unknown类型
    let value1: unknown
    value1 = 'a'
    value1 = undefined
// 如果没有类型断言或者基于控制流的类型细化时候，unknown不可以赋值给其他类型，此时他只可以赋值给unknown和any类型
    let value2: unknown
    value2 = value1
    let value3: string
    // value3 = value2  error

//    如果没有类型断言或者基于控制流的类型细化，不能在她上面进行任何的操作
    let value4: unknown
    // value4 += 1  error

//    unknown与任何其他类型组成的交叉类型，最后都等于其他类型
    type type1 = string & unknown    // string
    type  type2 = unknown & any      // any
//    unknown与其他类型（除了any） 组成的联合类型，最后都等于unknown
    type type3 = string | unknown  // unknown
    type type4 = unknown | any    // any
//  never类型是unknown的子类型
    type type5 = never extends unknown ? true : false

//        keyof unknown 等于类型never
    type type6 = keyof unknown
//    只能对unknow进行等或者不等操作，不能进行其他操作
    value1 = value2
    // value1 += value2  error
//     unknown类型的值，不能访问他的属性，不能作为函数调用，也不能用来作为类去创建实例

//    使用映射类型时候如果遍历的是unknown类型，则不会映射任何属性
    type Nowtype<T> = {
        [P in keyof T]: number
    }
    type nowtype1 = Nowtype<any>
    type nowtype2 = Nowtype<unknown>

}


// 类型推断继承
namespace Type10 {
    type Type1<T> = {
        [K in keyof T]: T[K] extends Function ? K : never
    }[keyof T]

    interface Now {
        name: string,
        age: number,
        get: () => void
    }

    type NewType = Type1<Now>
}


// infer
namespace Type11 {
    type Type1<T> = T extends any[] ? T[number] : T
    type Type2 = Type1<number[]>
    type Type3  = Type1<number>

    type nowType1<T> = T extends Array<infer U>?U:T
    type now1 = nowType1<string[]>
    type now2 = nowType1<string>
}

// Exclude  从前面选出不在后面的  以前面为主
namespace Type12 {
    type Type1 = Exclude<'a'|'b'|'c',"a"|'b'|'1'>
}


// Extract  从前面选出在后面的  以前面为主
namespace Type12 {
    type Type1 = Extract<'a'|'b'|'c',"a"|'b'|'1'>
}

// NonNullable<T>  去掉联合类型中的 null 和 undefined

// ReturnType<T>  取出返回值类型

// InstanceType<T> 获取构造函数类型的实例类型

namespace  Type13 {
    class  NewClass {
        constructor() {
        }
    }
    type Type1 = InstanceType<typeof NewClass> // Type1
    type Type2  = InstanceType<any>   // any
    type Type3 = InstanceType<never> // R
    // type Type4  = InstanceType<string>   error
}







