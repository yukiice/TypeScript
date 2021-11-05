// TS的Symbol是完全参照ES6中来做的

const s1 = Symbol('name')

const s1obj = {
    [s1]:'jack',
    s2:0,
    s3:false
}

console.log(s1obj);

s1obj[s1] = 'tom'

console.log(s1obj);

for (const key in s1obj) {
    // 这里不会打印出symbol的值
    console.log(key);  
}

// 也拿不到symbol的值
console.log(Object.getOwnPropertyNames(s1obj));

// 也拿不到
console.log(JSON.stringify(s1obj));


// 这两个个方法可以拿到对象中的Symbol值
console.log(Object.getOwnPropertySymbols(s1obj));
console.log(Reflect.ownKeys(s1obj));




// Symbol有两个静态方法  都会返回Symbol值  分别为 Symbol.for()     Symbol.keyFor()

// Symbol.key() 类似一种缓存 他会在全局进行一次检索，如果您之前创建了 比如下面  那么 s2 === s3  他们的值是相等的代表的是同一个Symbol值 
const s2 = Symbol.for('jacks')
const s3 = Symbol.for('jacks')
const s4 = Symbol.for('jackss')


// Symbol.keyFor 只能返回 Symbol.key()创建的值  不然返回undefined

const s5 = Symbol('halo')

console.log(Symbol.keyFor(s5));
console.log(Symbol.keyFor(s2));

// Symbol.hasInstance

class SymbolArray{
    static [Symbol.hasInstance](instance:any){
        return Array.isArray(instance)
    }
}

console.log([] instanceof SymbolArray);











