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
// 这里还可以做可选参数
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
