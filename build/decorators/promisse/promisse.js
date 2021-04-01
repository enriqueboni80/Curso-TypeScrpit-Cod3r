"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
function esperar3sPromisse() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("3s depois promisse....");
        }, 3000);
    });
}
// esperar3sPromisse().then((dado) => console.log(dado));
node_fetch_1.default("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((personagens) => personagens.films)
    .then((films) => console.log(films));
//# sourceMappingURL=promisse.js.map