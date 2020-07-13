function enumdemo() {
    var temperature;
    (function (temperature) {
        temperature[temperature["cold"] = 0] = "cold";
        temperature[temperature["hot"] = 1] = "hot";
    })(temperature || (temperature = {}));
    ;
    var temp;
    switch (temp) {
        case (0):
            console.log("Br...");
            break;
        case (1):
            console.log("yikes");
            break;
    }
}
enumdemo();
//# sourceMappingURL=inumdemo.js.map