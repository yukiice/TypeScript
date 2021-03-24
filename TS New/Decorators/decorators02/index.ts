type consturctor = {new (...args:any[]):{}}

function toString<T extends consturctor>(BaseClass:T){
return class extends BaseClass{
    toString(){
        return JSON.stringify(this)
    }
}
}

@toString
class Cc {
    public foo = 'foo'
    public num = 24
}

console.log(new Cc().toString())


function dealString(value:string){
    return value.charAt(0).toUpperCase() + value.slice(1)
}

function observable(target:any,key:string):any{
    const targetKey  ="on" + dealString(key) + "Change"
    target[targetKey]  =  function (fn:(prev:any,next:any)=>void){
        let prev = this[key]
            Reflect.defineProperty(this,key,{
                set(next){
                    fn(prev,next)
                    prev = next;
                }
            })
    }
}

class Cccs{
    @observable
    foo = -1
    @observable
    bar = 'bar'
}

const cqc = new Cccs()

cqc.onFooChange((prev,next)=>console.log(`${prev}`,`${next}`))
cqc.onBarChange((prev,next)=>console.log(`${prev}`,`${next}`))

cqc.foo = 100
cqc.bar = "sing"


