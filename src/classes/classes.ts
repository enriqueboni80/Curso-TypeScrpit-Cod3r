class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
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
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversario2 = new DataEsperta(3, 11, 1991);
console.log(aniversario2);

const casamento2 = new DataEsperta();
console.log(casamento2);

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public resumo(): string {
    return `o produto: ${this.nome} custa R$${this.preco} e tem ${
      this.desconto
    }% de desconto => Preco Final = R$${this.getPrecoComDesconto()}`;
  }

  getPrecoComDesconto(): number {
    return this.preco - this.preco * (this.desconto / 100);
  }
}
const produto1 = new Produto("tv", 1200, 10);
console.log(produto1.resumo());
const produto2 = new Produto("carro", 123);
console.log(produto2);

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
    }
    return this.velocidadeAtual;
  }

  public acelear(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro("Ford", "Ka", 185);
console.log(carro1.acelear());
console.log(carro1.acelear());
console.log(carro1.acelear());
console.log(carro1.frear());

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelear(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelear());
console.log(f40.frear());

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
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
  static PI: number = 3.1416;
  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}
console.log(Matematica.areaCirc(4));

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
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
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}
console.log(Unico.getInstance().agora());

//Somente Leitura
class Aviao {
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
// turboHelice.modelo = "123123" (não aceita por causa do readonly)
console.log(turboHelice);
