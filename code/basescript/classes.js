var persona = /** @class */ (function () {
    function persona(fn, ln, email, age) {
        this.fisrtName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }
    persona.prototype.greetMe = function () {
        console.log("Hola: " + this.fisrtName);
    };
    return persona;
}());
var p = new persona('Alvaro', 'emparan', 'a@a.com', 43);
p.greetMe();
//# sourceMappingURL=classes.js.map