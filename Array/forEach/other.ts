/*
 * @Author: yukiice
 * @Date: 2021-07-21 14:25:10
 * @LastEditTime: 2021-07-21 14:29:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/Array/forEach/other.ts
 */

let maps  = [{item:[1,2,3,4,5]},{item:[11,12,13,15]}]

async function mapss(data:any){
    await Promise.all(data.map(async (item:any,index:any)=>{
        function q(){
            console.log('a',index);
        }
        await q()
        console.log('b',index);
        
    }))
}

mapss(maps)

