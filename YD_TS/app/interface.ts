/*
 * @Author: your name
 * @Date: 2021-08-02 20:15:03
 * @LastEditTime: 2021-08-03 00:15:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/YD_TS/app/interface.ts
 */
interface IpData {
    id:number,
    m:string
}
type IpDataArr = IpData[]

function getPerson(){
    return new Promise<IpDataArr>((resolve,reject)=>{
        fetch('url').then((res)=>{
            return res.json()
        }).then(()=>{
            const data:IpDataArr = []
            resolve(data)
        }).catch(err=>{
            reject(err)
        })
    })
}
// ts的设置

interface Counter{
    ():void,
    count:number
}

const getCount = ():Counter=>{
    const c = ()=>{c.count++}
    c.count  = 0
    return c
}

const counter:Counter= getCount()
counter()
console.log(counter.count)
