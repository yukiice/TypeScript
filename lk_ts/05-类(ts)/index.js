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
//  03 ------- 类里面的修饰符号  typescript里面定义属性的时候给我们提供了三种修饰符
// {
//     public      公有      在类里面 子类 类外面都可以访问
//     protected   保护类型  在类里面 还有子类里面可以访问  但是在类外面不可以访问
//     provite     私有类型  只可以在类里面可以访问
// }
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.run = function () {
        console.log(this.name + "\u5C5E\u4E8Erun");
    };
    Person3.print = function () {
        console.log('这是静态方法');
    };
    Person3.sex = '男';
    return Person3;
}());
Person3.print();
console.log(Person3.sex);
// 多态
// 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类都有不同的表现
var Person4 = /** @class */ (function () {
    function Person4(name) {
        this.name = name;
    }
    Person4.prototype.p4 = function () {
        return '${this.name}来自p4';
    };
    Person4.sex = '女';
    return Person4;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.pdog = function () {
        return _super.prototype.p4.call(this) + '这是pdog重新调用后加上的';
    };
    return Dog;
}(Person4));
var dog = new Dog('小花');
console.log(dog.pdog());
