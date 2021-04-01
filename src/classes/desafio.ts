// Exercício 1 - Classe
class Moto {
  constructor(private _nome: string, private _velocidade: number = 0) {}

  public buzinar() {
    console.log("Tooooooooo!");
  }

  public acelerar(delta: number): void {
    this._velocidade += delta;
  }

  get nome(): string {
    return this._nome;
  }

  get velocidade(): number {
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
abstract class FiguraGeometica {
  constructor(protected tipoFigura: string) {}

  abstract area(...lados: number[]): number;
}

class Retangulo extends FiguraGeometica {
  constructor() {
    super("Retangulo");
  }

  public area(...lados: number[]): number {
    return lados[0] * lados[1];
  }
}

const retangulo = new Retangulo();
console.log(retangulo.area(1, 2));

// Exercício 3 - Getters & Setters
class Estagiario {
  constructor(public _primeiroNome: string) {}

  set primeiroNome(nome: string) {
    if (nome.length >= 3) {
      this._primeiroNome = nome;
    } else {
      this._primeiroNome = "";
    }
  }

  get primeiroNome(): string {
    return this._primeiroNome;
  }
}

const estagiario = new Estagiario('Leonardo')
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)



class Pais {
    constructor(private populacao: number, private porcVaciados: number) {}

    public calculaNumeroDePessoasVacinadas(): number{
        return this.populacao * this.porcVaciados
    }
}

const brazil = new Pais(212559000, 0.051)
console.log("Brasil: " + brazil.calculaNumeroDePessoasVacinadas())

const china = new Pais(1439324000, 0.038)
console.log("China: " + china.calculaNumeroDePessoasVacinadas())

const russia = new Pais(145934000, 0.05)
console.log("Russia: " + russia.calculaNumeroDePessoasVacinadas())