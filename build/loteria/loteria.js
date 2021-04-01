"use strict";
class Jogo {
    constructor(qtdDezena, qtdJogos) {
        this.qtdDezena = qtdDezena;
        this.qtdJogos = qtdJogos;
        this.arrayJogos = [];
        this.gerarJogos();
    }
    gerarUmJogo() {
        let arrayJogo = [];
        let dezenaSorteada;
        let dezenaJaFoiSorteada = false;
        while (arrayJogo.length < this.qtdDezena) {
            dezenaSorteada = Math.floor(Math.random() * Math.floor(60));
            dezenaJaFoiSorteada = this.verificarSeNumeroJaFoiSorteado(dezenaSorteada, arrayJogo);
            if (!dezenaJaFoiSorteada) {
                arrayJogo.push(dezenaSorteada);
            }
        }
        let jogoOrdenado = this.ordernarDezenas(arrayJogo);
        return jogoOrdenado;
    }
    gerarJogos() {
        for (let index = 0; index < this.qtdJogos; index++) {
            this.arrayJogos.push(this.gerarUmJogo());
        }
    }
    verificarSeNumeroJaFoiSorteado(dezenaSorteada, arrayDezenas) {
        return arrayDezenas.includes(dezenaSorteada);
    }
    ordernarDezenas(arrayDezenas) {
        return arrayDezenas.sort((a, b) => a - b);
    }
    getJogosGerados() {
        return this.arrayJogos;
    }
}
const jogo = new Jogo(10, 3);
console.log(jogo.getJogosGerados());
//# sourceMappingURL=loteria.js.map