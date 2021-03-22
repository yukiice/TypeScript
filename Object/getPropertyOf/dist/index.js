var prop = {};
var objs = Object.create(prop);
console.log(Object.getPrototypeOf(objs) === prop);
