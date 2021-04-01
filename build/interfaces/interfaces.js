"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "joão",
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Jonas", idade: 27, xyz: true });
pessoa.saudar("skywalker");
class Cliente {
    constructor() {
        this.nome = "";
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "joão";
meuCliente.saudar("sem braço");
let potencia;
potencia = (base, exp) => {
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() {
        throw new Error("Method not implemented.");
    }
    b() {
        throw new Error("Method not implemented.");
    }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
x.log();
y.log();
//# sourceMappingURL=interfaces.js.map