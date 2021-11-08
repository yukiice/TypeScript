namespace AdvanceType {

    // 联合类型  A & B
    const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
        let res = {} as T & U
        res = Object.assign(arg1, arg2)
        return res
    }
    const q = mergeFunc({ a: '1' }, { b: 2 })
    console.log(q);


    // 交叉类型  A | B | C
    const overlapping = (content: number | string): number => {
        if (typeof content === 'string') {
            return content.length
        } else {
            return content.toString().length
        }
    }

    const nowNumber = overlapping('1234')
    const nowNumber2 = overlapping(3)
    console.log(nowNumber);
    console.log(nowNumber2);


    // typeof类型判断  "typename"必须是 "number"， "string"， "boolean"或 "symbol"。  而且他只存在等与不等 不会出现其他可能
    const valueList = [12, 'abc']
    const getRandomValue = () => {
        const number = Math.random() * 10
        if (number < 5) {
            return valueList[0]
        } else {
            return valueList[1]
        }
    }

    const item = getRandomValue()

    if (typeof item === 'string') {
        console.log(item.length);
    } else {
        console.log(item.toString().length);

    }


    // instanceof判断
    class Ins1 {
        public name: string = 'yukiice'
        constructor() {

        }
    }
    class Ins2 {
        public age: number = 20
        constructor() {

        }
    }

    function getIns() {
        return Math.random() < 0.5 ? new Ins1() : new Ins2
    }

    const items = getIns()

    if (items instanceof Ins1) {
        console.log(items.name);
    } else {
        console.log(items.age);

    }


    // 类型断言不为null
    function splitStr(num: number | null): string {
        function getRes(prifix: string) {
            return prifix + num!.toFixed()
        }
        num = num || 0.1
        return getRes('yukiice')
    }

    console.log(splitStr(2));
    console.log(splitStr(null));



    // type 字符串
    type nowStr = 'jack' | 'tom' | 'yukiice' | 'sh'
    function getNowStr(str: nowStr) {
        return str
    }
    console.log(getNowStr('jack'));


    // 可辨识联合类型
    // 要素1：具有普通的单例类型属性 2.一个类型别名包含了哪些类型的联合


    interface Square {
        name: 'square',
        width: number
    }
    interface Rectangle {
        name: 'rectangle',
        width: number,
        height: number
    }
    interface Cicle {
        name: 'cicle',
        redius: number
    }

    function assertNever(value:never):never{
        throw new Error('Unexpected object' + value)
    }

    type Shape = Square | Rectangle | Cicle

    function getArea(s: Shape) {
        switch (s.name) {
            case 'square':
                return s.width ** 2
            case 'rectangle':
                return s.height * s.width
            case 'cicle':
                return Math.PI * s.redius ** 2
                default:
                    return assertNever(s)
        }
    }

    console.log(getArea({name:'cicle',redius:50}));
    
    


}