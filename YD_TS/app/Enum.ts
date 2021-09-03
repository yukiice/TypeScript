/*
 * @Author: your name
 * @Date: 2021-08-14 23:20:56
 * @LastEditTime: 2021-08-15 00:10:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/app/Enum.ts
 */
const upload = 1
const success =()=>{
    return 666
}
enum Status{
    Upload=upload,
    Success=success(), 
    Filed=2
}

console.log(Status.Upload)
console.log(Status.Success)
console.log(Status.Filed)
console.log(Status)
console.clear()


enum Animals{
    Dog = 1
}

interface Dog {
    type:Animals.Dog
}

// const dogs:Dog ={
//     type: Animals.Dog
// }

const enum Animal1{
    Dog = 1
}

const successs = Animal1.Dog
console.log(successs)
