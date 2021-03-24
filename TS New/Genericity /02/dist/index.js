function fn(arg) {
    console.log(arg.length, "这是长度");
    return arg;
}
console.log(fn("2"));
var Sql = /** @class */ (function () {
    function Sql() {
    }
    Sql.prototype.insert = function (data) {
        console.log(data);
        return true;
    };
    Sql.prototype["delete"] = function (data, id) {
        return true;
    };
    Sql.prototype.select = function (data, id) {
        return true;
    };
    Sql.prototype.update = function (data, id) {
        return true;
    };
    return Sql;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var mySql = new Sql();
mySql.insert({
    username: "yukiice",
    password: "10086"
});
