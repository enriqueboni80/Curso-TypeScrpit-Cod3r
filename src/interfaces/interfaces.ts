interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any; // aceita como sendo um atributo dinamico
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "joão",
  idade: 27,
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Jonas", idade: 27, xyz: true });
pessoa.saudar("skywalker");

class Cliente implements Humano {
  nome: string = "";
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  }
}
const meuCliente = new Cliente();
meuCliente.nome = "joão";
meuCliente.saudar("sem braço");

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number;
}
let potencia: FuncaoCalculo;
potencia = (base: number, exp: number): number => {
  return base ** exp;
};
console.log(potencia(3, 10));

// Herança
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {
    throw new Error("Method not implemented.");
  }
  b(): void {
    throw new Error("Method not implemented.");
  }
  abstract d(): void;
}

// Interface com prototype

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 2;
const y = 3;

x.log();
y.log();
