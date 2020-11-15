interface Person {
    name: string,
    age?: number,
    [propName: string]: any, // 加上这个  那么就可以在之后的接口调用的时候  新增属性 比如下面的sex
    say(): string
}

const getperson = (person: Person): void => {
    console.log(person.name)
}

getperson({
    name: 'hello',
    sex: '女',
    say() {
        return 'aaaa'
    }
})

// 类继承接口
class User implements Person {
    name = 'hello world'
    say() {
        return '????'
    }
}

const user = new User()
console.log(user.name)
console.log(user.say())


// 同样  接口之间也是可以互相继承的
interface common {
    age: number
}

interface Student extends common {
    name: string
}

interface Teacher extends common {
    teacgerName: string
}

const teacher = {
    teacherName: '瓜瓜',
    age: 40
}

const student = {
    name: '小花',
    age: 20
}


const getAge = (user: common) => {
    console.log(user.age)
}

getAge(teacher)
getAge(student)




// 可索引接口，不常用，用来做对数组和对象的约束

// 对数组的约束
interface UserArr {
    [index: number]: string
}

const arr: UserArr = ['aaa', 'bbb']
console.log(arr[1])

// 对对象的约束
interface UserObj {
    [index: string]: string
}
const obj: UserObj = { name: 'hello,this is a obj' }

console.log(obj.name)


// 类类型接口  
// 对类进行了约束  与抽象类有些相似

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


// 接口继承

interface Animal {
    eat():void
}
class Web implements  Animal {
    public name:string

    constructor (name:string){
        this.name =name
    }
    eat(){
        return '？？？、'
    }

}




