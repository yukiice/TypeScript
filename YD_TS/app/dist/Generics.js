function indenify(arg) {
    console.log(arg.length);
    return arg;
}
indenify("yukiice");
console.log(indenify("halo"));
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var genericNumber = new GenericNumber();
genericNumber.zeroValue = 0;
genericNumber.add = function (x, y) {
    return x + y;
};
console.log(genericNumber.add(11, 55));
var Arrays = /** @class */ (function () {
    function Arrays() {
        this.item = [];
    }
    return Arrays;
}());
console.clear();
var getArray = function (arg, times) {
    return new Array(times).fill(arg);
};
console.log(getArray([1], 5));
console.log(getArray('12', 5));
console.log(getArray({ length: 5 }, 5));
var getProps = function (obj, propName) {
    return obj[propName];
};
var objs = {
    a: 'a',
    b: 'b'
};
console.log(getProps(objs, 'a'));
