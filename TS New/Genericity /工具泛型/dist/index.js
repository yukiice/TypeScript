var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person = {
    name: "yukiice"
};
console.log(typeof person.name);
var qq = "name";
var strings = { name: "yukiice" };
var numbers = { 1: 1, 2: "2" };
var qs = { 第一个: 1, 第二个: "2", 第三个: 3 };
function Names(name) {
    console.log(name);
    return name;
}
Names({ name: "yukiice" });
function TodoDemo(todo, fields) {
    return __assign(__assign({}, todo), fields);
}
var todo1 = {
    title: "yukiice",
    description: "holo world"
};
var todo2 = TodoDemo(todo1, {
    description: "holo todo2"
});
console.log(todo2, "this is todo");
var reads = {
    name: "yukiice"
};
var q = {
    1: {
        name: ""
    }
};
console.log(q);
var todo = {
    title: "holo",
    name: "yukiice"
};
console.log(todo, "this is todo");
var tts = "1";
var omits = {
    age: 15
};
console.log(omits);
// returnType
// type myReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
function foos(a) {
    return [a];
}
var qsss = ["22"];
