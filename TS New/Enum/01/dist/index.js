var Cats;
(function (Cats) {
    Cats[Cats["Green"] = 202] = "Green";
    Cats[Cats["Yellow"] = 202] = "Yellow";
    Cats[Cats["Black"] = 203] = "Black";
    Cats[Cats["Red"] = 204] = "Red";
})(Cats || (Cats = {}));
var color = Cats[53];
console.log(color);
var foo = {};
foo.name = 'yukiice';
foo.age = 18;
console.log(foo);
// 为了得到更好的代码提示
var foo1 = {
    name: 'yukiice1',
    age: 15
};
console.log(foo1);
function moveTo(distance, direction) {
}
moveTo(1, "GET");
