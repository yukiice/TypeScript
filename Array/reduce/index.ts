const arr:any = [1,2,3,4,5]

arr.reduce((a:any,b:any,c:any)=>{
    console.log(a,b,c)
    return a + b
},0)


let arr1:any [] = ['name','age','long','short','long','name','age','name','long','short'] 

arr1.reduce((al:any,cv:any)=>{
    console.log(al,cv);
    if (!al.includes(cv)) {
        al.push(cv)
    }
    return al
},[])


let res =  arr1.reduce((pre,cur)=>{
    console.log(pre,cur)
    if (cur in pre) {
        pre[cur]++
    }else{
        pre[cur] = 1
    }
    return pre
},{})

console.log(res,'数组中每个元素出现的次数')

export {}