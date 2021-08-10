var arr = [1, 23, 4];
var arr1 = new Array(4);
console.log(arr1);
var arr3 = [1, 2, 5, 6];
console.log(arr3);
// 类数组
function sum() {
    var args = arguments;
    console.log(Object.prototype.toString.call(args));
}
sum();
// 元祖
var tuple = [1, '2', false];
function useFetch() {
    var res = 'yukiice';
    var age = 30;
    return tuplify(10, 20);
}
function tuplify() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return elements;
}
var _a = useFetch(), res = _a[0], age = _a[1];
console.log(res);
console.log(age);
