var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getSome(some) {
    return 1;
}
// 接口这里  如果定义任意属性，  那么就必须是他们的子集，
//   如果 只定义为string的话  那么 age 就为number  number不是string类型的子集，因为需要对其进行更改，如上设置
var p = {
    name: 'yukiice',
    age: 1
};
var p0 = [2, 3, 4, 65, 6, 6, 6, 5, 5];
function sum() {
    var arg = arguments;
    console.log(arg);
}
sum();
function choose(name1, name2) {
    if (name2 === void 0) { name2 = 'maomi'; }
    return name1 + name2;
}
var choose1 = choose('hello');
console.log(choose1);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
var aaa = reverse('123');
var bbb = reverse(12355);
console.log(aaa, typeof aaa, bbb, typeof bbb);
// function getCache(key:string) :any{
//     return (window as any).cache[key]
// }
// interface Cat {
//     name:string;
//     run():void
// }
// const tom = getCache('tom') as Cat
// tom.run()
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "this name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('qqq');
console.log(a.sayHi());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return "aaa" + _super.prototype.sayHi.call(this);
    };
    return Cat;
}(Animal));
var c = new Cat('qqq');
console.log(c.sayHi());
console.log('--------------------');
// getter setter 
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.get = function () {
        return 'jack';
    };
    Animals.prototype.set = function (value) {
        console.log('setter' + value);
    };
    return Animals;
}());
var as = new Animal('kittey');
as.name = 'Tom';
console.log(as.name);
var Cats = /** @class */ (function () {
    function Cats() {
        this.name = 'jack';
    }
    Cats.num = 42;
    return Cats;
}());
var cat = new Cats();
console.log(cat.name, Cats.num);
var Catss = /** @class */ (function () {
    function Catss(name) {
        this.name = name;
    }
    return Catss;
}());
// 抽象类是不允许被实例化的
// let a = new Catss('jack')    
// 抽象类中的抽象方法  必须被子类实现
var Catd = /** @class */ (function (_super) {
    __extends(Catd, _super);
    function Catd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Catd.prototype.sayHi = function () {
        console.log("" + this.name);
    };
    return Catd;
}(Catss));
var catd = new Catd('花花');
console.log(catd.name);
