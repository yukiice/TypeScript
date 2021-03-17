function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap(["1", 10]);
// 泛型有约束能力，在函数内部使用泛型变量的时候，由于不知道它是哪种类型。所以是不能随意操作它的属性或者方法的
function q(ak) {
    console.log(ak.length);
    return ak;
}
q({ length: 1 });
var akk;
akk = function (length, value) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res[i] = value;
    }
    return res;
};
console.log(akk(3, 11));
