// Usando Generics
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado<string>("joão").length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: "João", idade: 27 }));

// Generics em lista
// const avaliacoes: number[] = [10, 9.3, 7.7]
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}
interface Aluno {
  nome: string;
  idade: number;
}
imprimir<number>([1, 2, 3]);
imprimir<string>(["carro", "casa", "banana"]);
imprimir<Aluno>([{ nome: "fulano", idade: 27 }]);

interface Echo {
  <T>(data: T): T;
}
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma coisa"));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

class somaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new somaBinaria(3, 4).executar());

interface IData {
  dia: number;
  mes: number;
  ano: number;
}

class NovaData implements IData {
  constructor(public dia: number, public mes: number, public ano: number) {}
}

class DiferencaEntreDatas extends OperacaoBinaria<NovaData, string> {
  getTime(data: NovaData): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
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
class Fila<T> {
  private fila: Array<T> = [];

  entrar(dado: T): void {
    this.fila.push(dado);
  }

  proximo(): void {
    this.fila.shift();
  }

  imprimir(): void {
    console.log(this.fila);
  }
}

const fila = new Fila<number>();
fila.entrar(1);
fila.entrar(2);
fila.entrar(3);
fila.proximo();
fila.proximo();
fila.imprimir();

//Desafio Mapa

type Person<C, V> = { chave: C, valor: V }

class Mapa<C, V> {
  private fila: Array<Person<C, V>> = new Array<Person<C,V>>();

  colocar(dado: Person<C, V>) {
    this.fila.push(dado);
  }

  obter(chave: C): Person<C, V> | null {
    const resultado = this.fila.filter(i => i.chave === chave)
    return resultado ? resultado[0]: null
  }

  imprimir(): void {
    console.log(this.fila);
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({chave: 1, valor: "teste"});
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
console.log(mapa.obter(1))
//mapa.imprimir();
