"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 3001;
var carro_1 = require("./classes/carro");
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
app.get("/", function (req, res) {
    var carro2 = new carro_1["default"]("gol", 2003);
    res.send(carro2.showModelo());
});
//# sourceMappingURL=app.js.map