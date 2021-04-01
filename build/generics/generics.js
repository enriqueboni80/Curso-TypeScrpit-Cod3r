"use strict";
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("joão").length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "João", idade: 27 }));
// Generics em lista
// const avaliacoes: number[] = [10, 9.3, 7.7]
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir(["carro", "casa", "banana"]);
imprimir([{ nome: "fulano", idade: 27 }]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class somaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new somaBinaria(3, 4).executar());
class NovaData {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new NovaData(1, 2, 2020);
const d2 = new NovaData(2, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Exercicio sobre Fila
class Fila {
    constructor() {
        this.fila = [];
    }
    entrar(dado) {
        this.fila.push(dado);
    }
    proximo() {
        this.fila.shift();
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila();
fila.entrar(1);
fila.entrar(2);
fila.entrar(3);
fila.proximo();
fila.proximo();
fila.imprimir();
class Mapa {
    constructor() {
        this.fila = new Array();
    }
    colocar(dado) {
        this.fila.push(dado);
    }
    obter(chave) {
        const resultado = this.fila.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "teste" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
console.log(mapa.obter(1));
//mapa.imprimir();
//# sourceMappingURL=generics.js.map