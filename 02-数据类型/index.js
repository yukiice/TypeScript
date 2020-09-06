// 布尔
var flag = true;
// ts定义数组
var arr = [1, 2, 6];
console.log(arr);
console.log(flag);
// 泛型写法
var arr1 = [11, 50, 40];
console.log(arr1);
// 元组类型（tuple）  属于数组的一种
//这样就将数组的类型以及长度都做了限制
var arr3 = ['2', 5, false];
console.log(arr3, 'this is arr3');
// 枚举类型  (enmu)
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
var flag1 = Flag.success;
console.log(flag1, 'this is flag1');
// 如果没有限制  会默认打印索引值  如果中间有赋值  那么会默认下一个索引值延续
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 3] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
var flag2 = Color.blue;
console.log(flag2, 'this is flag2');
// 联合赋值  这样可以保证数据即使是undefined也能正常输出  另外也可以是null
var num;
// 01-赋值
// num =2
// console.log(num,'赋值了')
// 02-没赋值
console.log(num, '没赋值');
//void类型
// 这里由于没有返回值  所以里面的clg无法被打印 
function run() {
    console.log('run');
}
// 但使用void类型  那么返回值是可以为空的
function run1() {
    console.log('run1');
}
run();
run1();
