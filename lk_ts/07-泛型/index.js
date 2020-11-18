// 泛型的目的  就是为了解决类 接口 方法的复用性，以及对不特定数据类型的支持
function Demo(name, age) {
    return console.log(name, age);
}
Demo('15', 20);
var Dd = /** @class */ (function () {
    function Dd(data) {
        this.data = data;
    }
    Dd.prototype.getData = function (index) {
        return this.data[index].name;
    };
    return Dd;
}());
var data = new Dd([
    {
        name: 'yukkiice'
    }
]);
function getCoco(value) {
    return value;
}
var myCoco = getCoco;
myCoco('20');
var Cocoa = /** @class */ (function () {
    function Cocoa() {
    }
    Cocoa.prototype.add = function (info) {
        console.log(info, '????');
        return true;
    };
    Cocoa.prototype.update = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return Cocoa;
}());
var Moka = /** @class */ (function () {
    function Moka() {
    }
    return Moka;
}());
var moka = new Moka();
moka.name = 'moka';
moka.age = '16';
var cocoa = new Cocoa();
cocoa.add('nihao');
var Ccino = /** @class */ (function () {
    function Ccino(params) {
        this.title = params.title;
        this.desc = params.desc;
    }
    return Ccino;
}());
var ccino = new Ccino({
    title: '点兔',
    desc: "Cocoa and Ccino"
});
var newCocoa = new Cocoa();
newCocoa.add(ccino);
var newCocoas = new Cocoa();
newCocoas.update(ccino, 2);
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '花花';
u.password = '123456';
var mysql = new MysqlDb();
mysql.add(u);
