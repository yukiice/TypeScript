// Required

interface Req{
    name?:string;
    age?:number
}

type ReqType = Required<Req>

const Reqs:ReqType = {
    name:'yukiice',
    age:20
}

// NonNullable

type T0 = NonNullable<string | number | undefined | null>

// const qsq:T0 = null
// 不能将类型“null”分配给类型“T0”

const qsq:T0 = 0 
const qsqq:T0 = '2'


// Extract

type Q3 = Extract<"a" | "b" | "c", "a" | "f">

const q1:Q3 = "a"


// Record

interface Recs {
    name:string,
    age:number
}

interface Namm{
    1:string,
    2:string
}

type Recq = Record<keyof Namm,Recs>

const recq:Recq = {
    1:{
        name:'yukiice',
        age:15
    },
    2:{
        name:'yukiice',
        age:15
    }
}

console.log(recq)