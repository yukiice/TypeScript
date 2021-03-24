// type Person = {
//     name:string
//     age:number
// }
// const me:Person = {
//     name:'yukiice',
//     age:66
// }
// console.log(me)
// type Tpi<T> = keyof T
// interface Persona{
//     name:string,
//     age:number
// }
// const myKey:Tpi<Person> = 'age'
function Person(name, age) {
    return name;
}
console.log(Person('yukiice', 20));
var Classs = /** @class */ (function () {
    function Classs() {
    }
    Classs.prototype.add = function (name) {
        console.log(name);
    };
    return Classs;
}());
var cla = new Classs();
cla.add('yukiice1');
