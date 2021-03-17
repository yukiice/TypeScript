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

const arr2  =arr.find(item=>{
    return item.name === 'yukiice'
})


console.log(arr2?.about)

export {}