function getMinArray(arr) {
    var min = arr.slice().sort()[0];
    arr.forEach(function (item) {
        if (item < min) {
            item = min;
        }
    });
    return min;
}
function getMinStingArray(arr) {
    var min = arr.slice().sort()[0];
    arr.forEach(function (item) {
        if (item < min) {
            item = min;
        }
    });
    return min;
}
function getMinArrayAsFx(arr) {
    var min = arr.slice().sort()[0];
    arr.forEach(function (item) {
        if (item < min) {
            item = min;
        }
    });
    return min;
}
console.log(getMinArray([8, 2, 4, 6, 8, 5, 3]));
console.log(getMinStingArray(["e", "a", "b", "d"]));
console.log(getMinArrayAsFx(["e", "a", "b", "d"]));
console.log(getMinArrayAsFx([8, 2, 4, 6, 8, 5, 3]));
var getMinArrays = /** @class */ (function () {
    function getMinArrays(arr) {
        this.arr = [];
        this.arr = arr;
    }
    getMinArrays.prototype.add = function (ele) {
        this.arr.push(ele);
    };
    getMinArrays.prototype.min = function () {
        var min = this.arr.slice().sort()[0];
        this.arr.forEach(function (item) {
            if (item < min) {
                min = item;
            }
        });
        return min;
    };
    return getMinArrays;
}());
var obj = new getMinArrays([]);
obj.add(5);
obj.add(7);
obj.add(2);
console.log(obj.min(), "最小的数字");
