var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function immutable(target, propertyKey, descriptor) {
    var ori = descriptor.set;
    descriptor.set = function (value) {
        return ori === null || ori === void 0 ? void 0 : ori.call(this, __assign({}, value));
    };
}
var CO = /** @class */ (function () {
    function CO() {
        this._point = { x: 0, y: 0 };
    }
    Object.defineProperty(CO.prototype, "point", {
        get: function () {
            return this._point;
        },
        set: function (value) {
            this._point = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        immutable
    ], CO.prototype, "point");
    return CO;
}());
var co = new CO();
var point = { x: 1, y: 1 };
co.point = point;
console.log(co.point === point);
