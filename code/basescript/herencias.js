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
var persona1 = /** @class */ (function () {
    function persona1(fisrtName, lastName, email, age) {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    persona1.prototype.greetMe = function () {
        console.log("Hola: " + this.fisrtName);
    };
    return persona1;
}());
var estudiante = /** @class */ (function (_super) {
    __extends(estudiante, _super);
    function estudiante(fisrtName, lastName, email, age, grado) {
        var _this = _super.call(this, fisrtName, lastName, email, age) || this;
        _this.grado = grado;
        return _this;
    }
    estudiante.prototype.greetMe = function () {
        _super.prototype.greetMe.call(this);
        console.log("el grado es: \"" + this.grado + "\"");
    };
    return estudiante;
}(persona1));
var student = new estudiante('Alvaro', 'Emparán', 'a@q.com', 43, '6th');
student.greetMe();
//# sourceMappingURL=herencias.js.map