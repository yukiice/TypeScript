import { Dog } from './../08-命名空间/index';
// 类装饰器
function dog(params: any) {
    console.log(params)
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

let cocoa = new Cocoa('cocoa', 16)


// 装饰器工厂
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



// 类装饰器 重载构造函数
// 类装饰器表达的时候，类的构造函数会作为其唯一的参数
// 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
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


// 属性装饰器
// 属性装饰器表达式在运行的时候当做函数被调用，传入下列两个参数
// 1.对于静态成员来书是类的构造函数，对于实例成员来说是类的原型对象
// 2.成员的名字
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

// 方法装饰器
// 它会被应用到方法上



