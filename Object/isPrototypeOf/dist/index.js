function Foo() { }
function Bar() { }
function Baz() { }
Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);
var baz = new Baz();
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
// 这个方法可以用来检查对象是否继承自这个原型对象
// 检查 baz 对象是否继承自 Foo.prototype：
if (Foo.prototype.isPrototypeOf(baz)) {
    // do something safe
}
