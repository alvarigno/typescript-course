var tradicional = /** @class */ (function () {
    function tradicional(model, version) {
        this.model = model;
        this.version = version;
    }
    tradicional.prototype.ring = function () { return "ring ring"; };
    return tradicional;
}());
var moder = /** @class */ (function () {
    function moder(model, version) {
        this.model = model;
        this.version = version;
    }
    moder.prototype.ring = function () { return "ring bell"; };
    return moder;
}());
var bellphone = new tradicional("xpiria", 3.4);
var iphone = new moder("11X", 1.4);
var phone = [];
phone.push(bellphone);
phone.push(iphone);
for (var _i = 0, phone_1 = phone; _i < phone_1.length; _i++) {
    var ph = phone_1[_i];
    console.log(ph.ring());
}
//# sourceMappingURL=interfaces.js.map