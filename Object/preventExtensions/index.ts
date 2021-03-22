const obj = {}

Object.preventExtensions(obj)

try{
Object.defineProperty(obj,'pro1',{
    value: 40
})
}catch(e){
    console.log(e)
}

export {}