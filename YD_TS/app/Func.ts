/*
 * @Author: your name
 * @Date: 2021-08-01 00:59:24
 * @LastEditTime: 2021-08-03 00:33:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/app/func.ts
 */

// 默认参数
let func:(x:number,y:number) => Number = function (x:number,y:number){
    return x+y
}

func(1,2)

// 剩余参数
function push(array:any[],...items:any[]){
    items.forEach(item=>{
        array.push(item)
    })
}
let a  = [4]
push(a,2,3,5)
console.log(a)

// 可选参数  不单独存在时候必须放到后面
function maybeHave(second:number,firstName?:number){
    firstName? console.log(second + firstName) : console.log(second)
}
maybeHave(5)
maybeHave(5,10)