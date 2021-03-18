const arr: Array<string | number> = [1, 2, 3, 4, 5, 6];

arr.push(2);
console.log(arr, "添加单个元素");

const arr1: Array<string | number> = ["花花", "瓜瓜",222];

Array.prototype.push.apply(arr, arr1);
console.log(arr,'合并两个数组');

export {};
