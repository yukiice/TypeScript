/*
 * @Author: your name
 * @Date: 2021-08-01 19:18:16
 * @LastEditTime: 2021-08-02 16:17:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/app/TypeAssert.ts
 */
// 类型断言
function getLength(str) {
    if (str) {
        return str.length;
    }
    else {
        return str.toString().length;
    }
}
console.log(getLength('5'));
console.log(getLength(5));
function getLength2(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
