"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(_nome, _velocidade = 0) {
        this._nome = _nome;
        this._velocidade = _velocidade;
    }
    buzinar() {
        console.log("Tooooooooo!");
    }
    acelerar(delta) {
        this._velocidade += delta;
    }
    get nome() {
        return this._nome;
    }
    get velocidade() {
        return this._velocidade;
    }
}
const moto = new Moto("Ducati");
console.log(moto.nome);
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class FiguraGeometica {
    constructor(tipoFigura) {
        this.tipoFigura = tipoFigura;
    }
}
class Retangulo extends FiguraGeometica {
    constructor() {
        super("Retangulo");
    }
    area(...lados) {
        return lados[0] * lados[1];
    }
}
const retangulo = new Retangulo();
console.log(retangulo.area(1, 2));
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor(_primeiroNome) {
        this._primeiroNome = _primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = "";
        }
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
}
const estagiario = new Estagiario('Leonardo');
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
class Pais {
    constructor(populacao, porcVaciados) {
        this.populacao = populacao;
        this.porcVaciados = porcVaciados;
    }
    calculaNumeroDePessoasVacinadas() {
        return this.populacao * this.porcVaciados;
    }
}
const brazil = new Pais(212559000, 0.051);
console.log("Brasil: " + brazil.calculaNumeroDePessoasVacinadas());
const china = new Pais(1439324000, 0.038);
console.log("China: " + china.calculaNumeroDePessoasVacinadas());
const russia = new Pais(145934000, 0.05);
console.log("Russia: " + russia.calculaNumeroDePessoasVacinadas());
//# sourceMappingURL=desafio.js.map