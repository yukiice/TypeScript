// 新对象是可以扩展的

let empty = {}

console.log(Object.isExtensible(empty),'新对象是可以扩展的');

// 可以变的不可扩张
Object.preventExtensions(empty)

console.log(Object.isExtensible(empty))


// 密封对象是不可扩展的
let sealed = Object.seal({})

console.log(Object.isExtensible(sealed),'密封对象是不可扩展的')

// 冻结对象也是不可扩展的
let sealeds = Object.freeze({})

console.log(Object.isExtensible(sealeds),'冻结对象也是不可扩展的')