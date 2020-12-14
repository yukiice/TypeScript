function demos(a) {
    return a;
}
// function demos<T>(a:T[]):T[]{
//     return a
// }
// const app = demos<number>(2)
var app = demos([2]);
console.log(app);
function demo1(a) {
    console.log(a.name);
    return a;
}
demo1({ name: 'yukiice' });
function demo2(a, b) {
    return a + "+++" + b;
}
var demo2s = demo2('1', 2);
console.log(demo2s);
