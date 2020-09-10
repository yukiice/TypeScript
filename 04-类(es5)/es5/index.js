// 基础类  es5
function Person() {
    this.name = 'a';
    this.age = 18;
}
var p = new Person();
console.log(p.name);
// 构造函数 和原型链   里面有属性和方法
function Person1() {
    this.name = 'a'; //属性
    this.age = 18;
    this.run = function () {
        console.log('this is run ');
    };
}
// 3.类里面的静态方法
// Person1.getInfo = function(){
//     console.log('我是静态方法')
// }
// 原型链上面的属性会被多个实例所共享  构造函数不会
Person1.prototype.sex = "男";
Person1.prototype.work = function () {
    console.log(this.name + '在工作');
};
// web类 继承person类 原型链 +对象冒充的组合继承模式
function Web() {
    Person1.call(this); //对象冒充实现继承
}
// 这时候就可以进行调用person1里面的属性和方法
var w = new Web();
w.run(); //直接可以打印出Person1的run方法
// 但并不是完美的，对象冒充可以继承构造函数里面的属性和方法，但却没有办法继承原型链
// 可以通过以下方式 来实现原型链的继承 
// 这样不仅可以继承构造函数中的属性和方法，并且也可以继承原型链上面的属性和方法
Web.prototype = new Person1();
var ww = new Web();
console.log(ww.sex, '原型链继承后的结果');
var p1 = new Person1();
p1.work();
// ---------- 原型链继承的弊端  传参的时候  结果却是undefined
// function Person2(name,age) {
//     this.name = 'a2'   //属性
//     this.age = 20
//     this.run = function () {   //实例方法
//         console.log(this.name+'  this is run  Person2 '+this.age)
//     }
// }
// Person2.prototype.sex="还行"
// Person2.prototype.work = function () {
//     console.log(this.name +'不错')
// }
// function Web1(name,age){
// }
// Web1.prototype = new Person2()
// var www = new Web1('赵四',66) 
// www.run()
// var p = new Person2('李四',20)
// p.run()
// -----------所以要使用原型链加构造函数的组合继承
function Person2(name, age) {
    this.name = name; //属性
    this.age = age;
    this.run = function () {
        console.log(this.name + '  this is run  Person2 ' + this.age);
    };
}
Person2.prototype.sex = "还行";
Person2.prototype.work = function () {
    console.log(this.name + '不错');
};
function Web1(name, age) {
    Person2.call(this, name, age);
}
Web1.prototype = new Person2();
var wwww = new Web1('哈哈', 44);
wwww.run();
// var p = new Person2('李四',20)
// p.run()



function Person2(name,age) {
    this.name = name   //属性
    this.age = age

    this.run = function () {   //实例方法
        console.log(this.name+'  this is run  Person2 '+this.age)
    }
}
Person2.prototype.sex="还行"
Person2.prototype.work = function () {
    console.log(this.name +'不错')
}


function Web1(name,age){
    Person2.call(this,name,age)
}

Web1.prototype = new Person2()
var wwww = new Web1('哈哈',44)
console.log('why')
wwww.run()
