"use strict";
//string
let nome = "joão";
console.log(nome);
let idade = 27;
console.log(idade);
let possuiHobbies = false;
console.log(possuiHobbies);
//tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "27";
console.log(typeof minhaIdade);
// array de strings
let hobbies = ["Cozinhar", "Praticar Esportes"];
// array de tuplas
let endereco = ["Av Principal", 99];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
//any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(3, 3));
//tipo funcão
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: "joão",
    idade: 27,
};
let funcionario = {
    supervivores: ["andre", "jose"],
    baterPonto(horario) {
        if (horario <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do Horário!";
        }
    },
};
console.log(funcionario.supervivores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = "ótima";
console.log(`Minha nota é ${nota}!`);
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "Fulano",
    tel1: "123123123",
    tel2: null,
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map