// 方法装饰器
// 方法装饰器会在运行的时候传入下列三个参数：
// 1、对于静态成员来说是类的构造函数，对于实例来说是类的原型对象
// 2、成员的名字
// 3、成员的属性描述符

function get(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target);
    console.log(methodName);
    console.log(desc);
    target.url =  'xxx'
    target.run = function (){
        console.log('run')
    }
  };
}

class HttpClient {
  public url: any | undefined;
  constructor() { 
  }
  @get("http://www.baidu.com")
  getData() {
    console.log(this.url);
  }
}

let http:any  = new HttpClient()
console.log(http.url)
http.run()


