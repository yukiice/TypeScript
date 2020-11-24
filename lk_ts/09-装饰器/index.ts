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
// 它会被应用到方法的属性描述符上面，可以用来监视、修改或者替换方法定义

// 方法装饰会在运行的时候传入下列三个参数
// 1.成员的名字
// 2.对于静态成员来说是类的构造函数，对于实例是类的原型对象
// 3.成员的属性描述符

function logMethod(params:any){
    return function (target:any,methodName:any,desc:any){
        console.log(target)  //  getdata   constructor: Cat
        console.log(methodName)   // getData
        console.log(desc.value)  //打印出来的就是 getdata(){ console.log)(this.url)}

        target.apiUrl = 'xxx'
        target.run = function(){
            console.log('run')
        }

        
    }
}
class Cat {
public url:any | undefined;
constructor(){

}
@logMethod('http://baidu.com')
getData(){
    console.log(this.url)
}
}

let cat:any  =new Cat()
console.log(cat.apiUrl)



// 修改装饰器的方法
function Logs(params:any){
    return function (target:any,methodName:any,desc:any){
        console.log(target)  //  getdata   constructor: Cat
        console.log(methodName)   // getData
        console.log(desc.value)  //打印出来的就是 getdata(){ console.log)(this.url)}

    // 修改装饰器的方法，把装饰器方法里传入的所有参数改为string类型
    let  add  =desc.value
    desc.value  =function (...args:any[]){
        args = args.map((value)=>{
            return String(value)
        })

        console.log(args)   //  并没有打印出来getdata里面的方法  而是打印出来了  ['111','xxx']

        // 但可以通过一些方法  比如 
        onmsgesturehold.apply(this,args)
    }        
    }
}
class Cats {
public url:any | undefined;
constructor(){

}
@Logs('http://baidu.com')
getData(...args:any[]){
    console.log('我是getdata里面的方法')
    console.log(args)   //通过上面的一系列运算  现在这里就变成了['123','xxx']  完成了对方法装饰器的改变
} 
}

let cats:any  =new Cats()
Cats.getData(123,'xxx')





//  4、方法参数装饰器
// 参数装饰器表达式会在运行时候当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列三个参数
// 1.方法的名字
// 2.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// 3.参数在函数参数列表中的索引


function Cocoy(params:any){
    return function (target:any,paramsName:any,paramsIndex:any){
        console.log(params)   //  step1 'uid'
        console.log(target)   //  stpe2  类的原型对象
        console.log(paramsName) // step3  getData  方法的名称
        console.log(paramsIndex) //step4 0  索引

        // 因此 就可以这样操作  
        target.apiUrl =  params  
    }
}


class Cocos{
    public url:string | undefined
    constructor(){

    }
    // 这里调用方法的时候  会同时调用装饰器  这样可以为类的原型增加一些元数据
    getData(@Cocoy('uid') uid:any){
         console.log(uid)     //step5  'xxx'  这个是  uid:any这个值  传入的值
    }
}
let cocos = new Cocos()
cocos.getData('xxx')

console.log(cocos.apiUrl)
