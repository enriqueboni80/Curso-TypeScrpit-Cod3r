//string
let nome: string = "joão";
console.log(nome);

let idade: number = 27;
console.log(idade);

let possuiHobbies: boolean = false;
console.log(possuiHobbies);

//tipos explícitos
let minhaIdade: any;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "27";
console.log(typeof minhaIdade);

// array de strings
let hobbies: string[] = ["Cozinhar", "Praticar Esportes"];

// array de tuplas
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

// enums
enum Cor {
  Cinza,
  Verde,
  Azul,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

//any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

function retornaMeuNome(): string {
  return nome;
}
console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}
digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
console.log(multiplicar(3, 3));

//tipo funcão
let calculo: (numeroA: number, numeroB: number) => number;
calculo = multiplicar;
console.log(calculo(5, 6));

// objetos
let usuario: { nome: string; idade: number } = {
  nome: "joão",
  idade: 27,
};

type Funcionario = {
  supervivores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario: Funcionario = {
  supervivores: ["andre", "jose"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto Normal";
    } else {
      return "Fora do Horário!";
    }
  },
};

console.log(funcionario.supervivores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = "ótima";
console.log(`Minha nota é ${nota}!`);

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "123123123",
  tel2: null,
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);


// Exercicio Conta Bancaria
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number): void {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
