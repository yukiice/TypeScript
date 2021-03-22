const obj:any = {
    name:'yukiice',
    age:18,
    text:'holo'
}

console.log(Object.entries(obj))

for (const [key,value] of Object.entries(obj)) {
    console.log(`${key}   ${value}`)
}

const qs = new Map(Object.entries(obj))

console.log(qs)

export {}