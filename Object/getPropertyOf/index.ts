let prop = {}
let objs = Object.create(prop)

console.log(Object.getPrototypeOf(objs) === prop)
