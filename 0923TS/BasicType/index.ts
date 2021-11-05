let tuple: [string, number, boolean]

tuple = ['1', 2, false]


// 枚举
enum Roles {
    SUPER_ADMIN = 1,
    ADMIN = 2,
    USER = 4
}

console.log(Roles[4])


// never类型
// 表示哪些永远不存在的值

const errorFunc = (message: string): never => {
    throw new Error(message)
}

const infiniteFunc = (): never => {
    while (true) {

    }
}

// 类型断言

const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (target as string).length
    } else {
        return target.toString().length
    }
}

console.log(getLength('323'));
console.log(getLength(33));

