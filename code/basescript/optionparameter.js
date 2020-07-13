function add(num1, num2, num3 //optional param '?'
) {
    var total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}
var awnser = add(14, 23, 30);
console.log("Retorna: " + awnser);
awnser = add(20, 30);
console.log('opcional : ' + awnser);
//# sourceMappingURL=optionparameter.js.map