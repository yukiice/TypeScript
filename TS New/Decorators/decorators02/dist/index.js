var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function toString(BaseClass) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.toString = function () {
            return JSON.stringify(this);
        };
        return class_1;
    }(BaseClass));
}
var Cc = /** @class */ (function () {
    function Cc() {
        this.foo = 'foo';
        this.num = 24;
    }
    Cc = __decorate([
        toString
    ], Cc);
    return Cc;
}());
console.log(new Cc().toString());
function dealString(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
function observable(target, key) {
    var targetKey = "on" + dealString(key) + "Change";
    target[targetKey] = function (fn) {
        var prev = this[key];
        Reflect.defineProperty(this, key, {
            set: function (next) {
                fn(prev, next);
                prev = next;
            }
        });
    };
}
var Cccs = /** @class */ (function () {
    function Cccs() {
        this.foo = -1;
        this.bar = 'bar';
    }
    __decorate([
        observable
    ], Cccs.prototype, "foo");
    __decorate([
        observable
    ], Cccs.prototype, "bar");
    return Cccs;
}());
var cqc = new Cccs();
cqc.onFooChange(function (prev, next) { return console.log("" + prev, "" + next); });
cqc.onBarChange(function (prev, next) { return console.log("" + prev, "" + next); });
cqc.foo = 100;
cqc.bar = "sing";
