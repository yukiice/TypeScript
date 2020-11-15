var getperson = function (person) {
    console.log(person.name);
};
getperson({
    name: 'hello',
    sex: '女',
    say: function () {
        return 'aaaa';
    }
});
// 类继承接口
var User = /** @class */ (function () {
    function User() {
        this.name = 'hello world';
    }
    User.prototype.say = function () {
        return '????';
    };
    return User;
}());
var user = new User();
console.log(user.name);
console.log(user.say());
var teacher = {
    teacherName: '瓜瓜',
    age: 40
};
var student = {
    name: '小花',
    age: 20
};
var getAge = function (user) {
    console.log(user.age);
};
getAge(teacher);
getAge(student);
var arr = ['aaa', 'bbb'];
console.log(arr[1]);
var obj = { name: 'hello,this is a obj' };
console.log(obj.name);
var Bose = /** @class */ (function () {
    function Bose(name) {
        this.name = name;
    }
    Bose.prototype.go = function () {
        console.log(this.name + '？？？');
    };
    return Bose;
}());
var bose = new Bose('yukiice');
console.log(bose.name);
bose.go();
