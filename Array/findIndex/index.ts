interface Names{
    id:number,
    name:string,
    about:string
}

let arr:Names[] = [
    {
        id:1,
        name:'yukiice',
        about:'hello'
    },
    {
        id:2,
        name:'qqq',
        about:"qqq holo"
    },
    {
        id:3,
        name:'yukiice',
        about:'holo'
    },
]

console.log(arr.findIndex(x=>x.name === 'qqq'),'找到了')
console.log('-------------');
console.log(arr.findIndex(x=>x.name === 'ssss'),'未找到');

export {}