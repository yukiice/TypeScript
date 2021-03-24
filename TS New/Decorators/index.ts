function zsq01(p: string) {
  return function (target: any) {
    console.log(target.name);
    console.log("装饰器");
  };
}

@zsq01("qq")
class Helllos {}

function zsp02(p?: number) {
  return function (target: any) {
    target.prototype.age = p;
  };
}

@zsp02(18)
class Zsp02 {
  public name: string | undefined;
  public age: number | undefined;
  constructor(name: string) {
    this.name = name;
  }
}

let zsp002 = new Zsp02("yukiice");

console.log(zsp002.age);

function first() {
  console.log("first");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first call");
  };
}

function second() {
  console.log("second");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second call");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}

console.log(`
-----------------------------
`);
// class

function seals(constructor: Function) {
  // seal可以封闭对象
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@seals
class SealClass {
  type = "report";
  public title: string | undefined;
  constructor(title: string) {
    this.title = title;
    console.log(title);
  }
}

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
class newRep {
  type = "report";
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

const newrep = new newRep('yukiice is right')

console.log(newrep.title)
console.log(newrep.type)


// 方法装饰器

function fangfaD(value:boolean){
    return function (target:any,propertyKey:string,descriptor:PropertyDescriptor){
        descriptor.enumerable =  value;
    }
}

class Fangfa{
    getting:string
    constructor(message:string){
        this.getting = message
    }
    @fangfaD(false)
    greet(){
        return `hello `+ this.getting
    }
    
}


// 访问器装饰器


