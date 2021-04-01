"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
const casamento = new Data();
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario2 = new DataEsperta(3, 11, 1991);
console.log(aniversario2);
const casamento2 = new DataEsperta();
console.log(casamento2);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `o produto: ${this.nome} custa R$${this.preco} e tem ${this.desconto}% de desconto => Preco Final = R$${this.getPrecoComDesconto()}`;
    }
    getPrecoComDesconto() {
        return this.preco - this.preco * (this.desconto / 100);
    }
}
const produto1 = new Produto("tv", 1200, 10);
console.log(produto1.resumo());
const produto2 = new Produto("carro", 123);
console.log(produto2);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
        }
        return this.velocidadeAtual;
    }
    acelear() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 185);
console.log(carro1.acelear());
console.log(carro1.acelear());
console.log(carro1.acelear());
console.log(carro1.frear());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelear() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelear());
console.log(f40.frear());
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
// Atributos e métodos estáticos (metodos estáticos eu não preciso de instanciar a classe)
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
const soma = new Soma();
soma.executar(1, 2, 3, 4, 5);
console.log(soma.getResultado());
const multiplicacao = new Multiplicacao();
multiplicacao.executar(1, 2, 3, 4, 5);
console.log(multiplicacao.getResultado());
// Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
console.log(Unico.getInstance().agora());
//Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
// turboHelice.modelo = "123123" (não aceita por causa do readonly)
console.log(turboHelice);
//# sourceMappingURL=classes.js.map