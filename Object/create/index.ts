const obj = {
    a:'a',
    b:'b',
    c:function(n:string){
        console.log(n);
    }
}

const b = Object.create(obj,{
    "title":{
        value:'holo'
    }
})

console.log(obj)

console.log(b)

b.c('holo')




export {}