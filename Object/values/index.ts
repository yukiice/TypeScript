let obj = {
  name: "yukiice",
  age: 15,
  from: "china",
};

console.log(Object.values(obj),'对象的处理');

let myobj = Object.create({},{
    getfoo:{
        value:42
    },
    foo:{
        value:function (){
        return this.qqq
        }
    }
})

console.log(myobj.getfoo,'打印对象上的属性值')

console.log(Object.values(myobj),'没有枚举属性')

console.log(myobj.qqq= 'tom','打印对象上的属性值')

console.log(Object.values(myobj),'处理后的返回值')



console.log(Object.values('yukiice'),'字符串的处理')

export {};
