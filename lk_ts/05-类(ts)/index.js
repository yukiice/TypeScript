var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 001----- ts中定义类的方法
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person('花花');
p.run();
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    return Person1;
}());
var p1 = new Person1('花花1');
console.log(p1.getName());
// 002 ---- ts中实现继承 主要依靠 extends / super 这两个关键字
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person2;
}());
var p2 = new Person2('花花2');
console.log(p2.run());
var web1 = /** @class */ (function (_super) {
    __extends(web1, _super);
    function web1(name) {
        return _super.call(this, name) || this; //  初始化父类的构造函数
    }
    web1.prototype.work = function () {
        console.log(this.name + "\u5728work");
    };
    return web1;
}(Person2));
var p3 = new web1('花花3');
console.log(p3.name);
// 这里就实现了对之前的类的继承
console.log(p3.run(), 'run');
console.log(p3.work(), 'work');
