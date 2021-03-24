var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function zsq01(p) {
    return function (target) {
        console.log(target.name);
        console.log("装饰器");
    };
}
var Helllos = /** @class */ (function () {
    function Helllos() {
    }
    Helllos = __decorate([
        zsq01("qq")
    ], Helllos);
    return Helllos;
}());
function zsp02(p) {
    return function (target) {
        target.prototype.age = p;
    };
}
var Zsp02 = /** @class */ (function () {
    function Zsp02(name) {
        this.name = name;
    }
    Zsp02 = __decorate([
        zsp02(18)
    ], Zsp02);
    return Zsp02;
}());
var zsp002 = new Zsp02("yukiice");
console.log(zsp002.age);
function first() {
    console.log("first");
    return function (target, propertyKey, descriptor) {
        console.log("first call");
    };
}
function second() {
    console.log("second");
    return function (target, propertyKey, descriptor) {
        console.log("second call");
    };
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.method = function () { };
    __decorate([
        first(),
        second()
    ], ExampleClass.prototype, "method");
    return ExampleClass;
}());
console.log("\n-----------------------------\n");
// class
function seals(constructor) {
    // seal可以封闭对象
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var SealClass = /** @class */ (function () {
    function SealClass(title) {
        this.type = "report";
        this.title = title;
        console.log(title);
    }
    SealClass = __decorate([
        seals
    ], SealClass);
    return SealClass;
}());
function reportableClassDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.reportingURL = "http://www...";
            return _this;
        }
        return class_1;
    }(constructor));
}
var newRep = /** @class */ (function () {
    function newRep(title) {
        this.type = "report";
        this.title = title;
    }
    newRep = __decorate([
        reportableClassDecorator
    ], newRep);
    return newRep;
}());
var newrep = new newRep('yukiice is right');
console.log(newrep.title);
console.log(newrep.type);
// 方法装饰器
function fangfaD(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var Fangfa = /** @class */ (function () {
    function Fangfa(message) {
        this.getting = message;
    }
    Fangfa.prototype.greet = function () {
        return "hello " + this.getting;
    };
    __decorate([
        fangfaD(false)
    ], Fangfa.prototype, "greet");
    return Fangfa;
}());
// 访问器装饰器
