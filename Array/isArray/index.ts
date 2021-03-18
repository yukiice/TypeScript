const arr:number[] = [1,2,3,4,5,6]

interface Obj{
    name:string,
    title:string
}
const obj:Obj = {
    name:'yukiice',
    title:'hello'
}

console.log(Array.isArray(obj),`obj的判断`)

console.log(Array.isArray(arr),'arr的判断')


export {}