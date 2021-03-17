// 方法装饰器
// 方法装饰器会在运行的时候传入下列三个参数：
// 1、对于静态成员来说是类的构造函数，对于实例来说是类的原型对象
// 2、成员的名字
// 3、成员的属性描述符
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function get(params) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.url = 'xxx';
        target.run = function () {
            console.log('run');
        };
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        get("http://www.baidu.com")
    ], HttpClient.prototype, "getData");
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.url);
http.run();
