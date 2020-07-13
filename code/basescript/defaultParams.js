function addit(num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    var total = num1 + num2 + num3;
    return total;
}
var anwser = addit(1, 2, 3);
console.log("respuesta: " + anwser);
anwser = addit(1, 2);
console.log("respuesta: " + anwser);
//# sourceMappingURL=defaultParams.js.map