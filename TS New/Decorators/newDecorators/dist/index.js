var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function f(key) {
    console.log('执行了', key);
    return function () {
        console.log('call', key);
    };
}
var C = /** @class */ (function () {
    function C(foo) {
    }
    C.method = function (foo) { };
    C.prototype.method = function (foo) {
    };
    Object.defineProperty(C.prototype, "egg", {
        get: function () {
            return this.prop;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        f('instance property属性装饰器-----在上面')
    ], C.prototype, "prop");
    __decorate([
        f('instance method方法装饰器'),
        __param(0, f('instance method参数装饰器'))
    ], C.prototype, "method");
    __decorate([
        f('访问器装饰器')
    ], C.prototype, "egg");
    __decorate([
        f('instance property属性装饰器-----在下面')
    ], C.prototype, "props");
    __decorate([
        f('static属性装饰器')
    ], C, "prop");
    __decorate([
        f("method方法装饰器"),
        __param(0, f('static method parameter参数装饰器'))
    ], C, "method");
    C = __decorate([
        f("类装饰器"),
        __param(0, f('constructor参数装饰器'))
    ], C);
    return C;
}());
