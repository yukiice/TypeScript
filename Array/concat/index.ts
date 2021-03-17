const a:number[] = [1,2,3,4,5]
const b:number[] = [6,4,23,5,6,7]

const q = Array.from(new Set(a.concat(b)))

console.log(q)


const c = a.concat()

console.log(c)


export {}