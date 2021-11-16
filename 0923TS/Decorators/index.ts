let sign = null
function setName(name: string) {
    return function (target: new () => any) {
        sign = target
        console.log(target.name);

    }
}

@setName('yukiice')
class NewSign {
    constructor() {

    }
}



// 访问器装饰器
function enumerable(bool: boolean) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyName);
        descriptor.enumerable = bool
    }
}

class ClassF {
    constructor(public age: number) {

    }
    @enumerable(false)
    public getAge() {
        return this.age
    }
}

const classa = new ClassF(18)
console.log(classa.age);



// 属性装饰器
class classG {
    public _name: string
    constructor(name: string) {
        this._name = name
    }
    @enumerable(true)
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
}

const newClassG  =new classG('yukiice')
for (const key in newClassG) {
    console.log(key);
}



//演算顺序是由上往下，执行顺序是由下往上
//  f 和 g 都返回了另一个函数  f 和 g称为装饰器工厂
//  target 是当前对象的原型
// propertyKey 是方法的名称
// descriptor 方法的属性描述符
function f() {
    console.log("f(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called");
    }
  }
  
  function g() {
    console.log("g(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
    }
  }
  
  class C {
    @f()
    @g()
    method() {}
  }


//   参数装饰器
// 内部有三个参数  target propertykey  index => index指的是数组中的位置
