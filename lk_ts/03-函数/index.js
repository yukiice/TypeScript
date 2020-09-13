// 匿名函数
var fun = function () {
    return 123;
};
fun();
console.log(fun());
// ts中定义方法传参
function fun1(name, age) {
    return name + "---" + age;
}
console.log(fun1('小花', 20));
// 没有返回值的时候
function fun2() {
    console.log('fun2');
}
fun2();
// 这里还可以做可选参数 可以给默认参数  age?:number 换成 age:number=20
function fun3(name, age) {
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u4E0D\u7528\u4F20\u5165age";
    }
}
console.log(fun3('花花')); //没有传入age
console.log(fun3('花花', 20)); //传入了age
// 3-4  剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
console.log(sum(1, 2, 3, 4));
function arr(str) {
    if (typeof str === 'string') {
        return 'string---' + str;
    }
    else {
        return 'number---' + str;
    }
}
console.log(arr(5));
console.log(arr('hello'));
// 这里相当于限制了数据传入的类型
// 比如
// console.log(arr(true))   这里就会报错
