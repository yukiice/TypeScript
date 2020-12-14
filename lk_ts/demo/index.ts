
//  -----------------------泛型回忆------------------------------------------------------------------------

interface Demo {
    name?:string
}

function  demos<T>(a:Array<T>):Array<T>{
    return a 
}
// function demos<T>(a:T[]):T[]{
//     return a
// }

// const app = demos<number>(2)
const app = demos<number>([2])

console.log(app);


function demo1<T extends Demo>(a:T):T{
    console.log(a.name);
    return a
}

demo1({name:'yukiice'})



function demo2<K,T>(a:K,b:T){
    return  `${a}+++${b}`
}

const demo2s =  demo2<string,number>('1',2)
console.log(demo2s);


// 类泛型
