interface Vagetable {
    color:string,
    type:string
}

const getVagetable = ({color,type}:Vagetable)=>{
    return `A${color}and${type}`
}

console.log(getVagetable({color:'red',type:'null',size:1} as Vagetable));


interface Vagetables extends Vagetable {
    name:string
}

const qs:Vagetables = {color:'1',type:'2',name:'3'}


interface Counter {
    ():void,
    count:number
}

const counter = ():Counter =>{
    const c =  ()=>{c.count++}
    c.count =0 
    return c
}

const getCounter:Counter = counter()

getCounter()
console.log(getCounter.count);

getCounter()
console.log(getCounter.count);

getCounter()
console.log(getCounter.count);

