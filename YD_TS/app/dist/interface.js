function getPerson() {
    return new Promise(function (resolve, reject) {
        fetch('url').then(function (res) {
            return res.json();
        }).then(function () {
            var data = [];
            resolve(data);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
var getCount = function () {
    var c = function () { c.count++; };
    c.count = 0;
    return c;
};
var counter = getCount();
counter();
console.log(counter.count);
