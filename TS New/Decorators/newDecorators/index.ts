function f(key: string):any{
    console.log('执行了',key)
    return function(){
        console.log('call',key)
    }
}

@f("类装饰器")
class C{
    @f('instance property属性装饰器-----在上面')
    prop?:string

    @f('static属性装饰器')
    static prop?: string

    @f("method方法装饰器")
    static method(@f('static method parameter参数装饰器') foo:any){}

    constructor(@f('constructor参数装饰器') foo:any){}
    
    @f('instance method方法装饰器')
    method(@f('instance method参数装饰器') foo: any){

    }

    @f('访问器装饰器')
    get egg(){
        return this.prop
    }

    @f('instance property属性装饰器-----在下面')
    props?:string
}