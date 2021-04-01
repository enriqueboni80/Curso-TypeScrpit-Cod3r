"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3001;
const carro_1 = __importDefault(require("./classes/carro"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
app.get("/", (req, res) => {
    let carro2 = new carro_1.default("gol", 2003);
    res.send(carro2.showModelo());
});
//# sourceMappingURL=app.js.map