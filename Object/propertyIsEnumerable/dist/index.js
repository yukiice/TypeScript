var obj1 = {};
var arr1 = [];
obj1.prototy1 = 66;
arr1[0] = 42;
console.log(obj1.propertyIsEnumerable('prototy1'), '对象中这个属性可以枚举');
console.log(obj1.propertyIsEnumerable('prototy2'), '对象中这个属性不可以枚举');
console.log(arr1.propertyIsEnumerable(0), '数组中这个属性可以枚举');
console.log(arr1.propertyIsEnumerable(1), '数组中这个属性不可以枚举');
