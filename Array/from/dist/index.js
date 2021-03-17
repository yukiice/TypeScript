// string生成数组
console.log(Array.from("foo"));
// set生成数组
var set = new Set(["foo", "qqq", "aaa"]);
console.log(Array.from(set));
// map生成数组
var map = new Map([
    [0, 1],
    [1, 2],
]);
console.log(Array.from(map.keys()), "输出键");
console.log(Array.from(map.values()), "输出值");
// 数组去重合并
function combine(m, n) {
    var arr = [].concat.apply([], m);
    var arr2 = arr.concat.apply([], n);
    return Array.from(new Set(arr2));
}
var m = [1, 2, 3, 4];
var n = [2, 3, 3, 4];
console.log(combine(m, n), '数组合并去重结果');
// Array.form中使用箭头函数
console.log(Array.from([1, 2, 3], function (x) { return x + x; }));
