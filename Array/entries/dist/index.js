var a = [1, 2, 3, 4, 5, 6, 7];
var b = a.entries();
console.log(b.next());
for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
    var i = b_1[_i];
    console.log(i);
}
