var demos = /** @class */ (function () {
    function demos(name) {
        this.name = name;
    }
    return demos;
}());
var dog1 = new demos('yukiice');
demos.prototype.toString = function dogToString() {
    return "" + this.name;
};
console.log(dog1.toString());
var demo2 = /** @class */ (function () {
    function demo2(name, breed, color, sex) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.sex = sex;
    }
    return demo2;
}());
var theDog = new demo2("Gabby", "Lab", "chocolate", "female");
console.log(theDog.toString());
