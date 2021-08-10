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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _region;
/*
 * @Author: your name
 * @Date: 2021-08-01 01:34:02
 * @LastEditTime: 2021-08-09 17:17:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/app/class.ts
 */
// 抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('move');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this) || this;
        _region.set(_this, void 0);
        _this.uname = 'yukiice';
        __classPrivateFieldSet(_this, _region, '测试私有');
        return _this;
    }
    Dog.prototype.makeSound = function () {
        console.log('hello');
        console.log(__classPrivateFieldGet(this, _region));
    };
    return Dog;
}(Animal));
_region = new WeakMap();
var dog = new Dog();
dog.makeSound();
dog.move();
console.log(dog.uname);
console.log(dog.region);
console.clear();
// new test
// let info ={
//     _age:18,
//     set age(value:number){
//         if (value > 18) {
//             console.log('why so far')
//         }else{
//             console.log('i am young')
//         }
//     },
//     get age(){
//         console.log('what do you do')
//         return this._age
//     }
// }
// console.log(info._age)
// info.age = 17
// info.age = 19
var info = /** @class */ (function () {
    function info(age) {
        this._age = age;
    }
    return info;
}());
