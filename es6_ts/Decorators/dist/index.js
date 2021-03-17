var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var provideMap = new WeakMap();
function provider(target) {
    provideMap.set(target, null);
}
// io
var FlowerService = /** @class */ (function () {
    function FlowerService() {
    }
    FlowerService.prototype.strew = function () {
        console.log('strew flower');
    };
    FlowerService = __decorate([
        provider
    ], FlowerService);
    return FlowerService;
}());
function inject(target) {
}
var Gretter = /** @class */ (function () {
    function Gretter(flower) {
        this.flower = flower;
    }
    Gretter.prototype.greet = function (name) {
        console.log("holo " + name);
        this.flower.strew();
        return "hello";
    };
    Gretter = __decorate([
        inject
    ], Gretter);
    return Gretter;
}());
var g = new Gretter(new FlowerService());
g.greet('ok');
